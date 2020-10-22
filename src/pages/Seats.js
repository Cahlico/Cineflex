import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation, Link } from "react-router-dom";

import RenderSeats from '../components/RenderSeats';
import Footer from '../components/Footer';
import SeatTypes from '../components/SeatTypes';

export default function Seats() {

    const { state } = useLocation();
    const { time, date, id } = state;
    const hour = time.name
    const seats = time.seats;
    const [chosenSeats, setChosenSeats] = useState([]);

    function reserveSeats() {
        if(chosenSeats.length !== 0) {
            const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/seats/book_many', { "ids": chosenSeats });
        }
    }

    return (
        <article>
            <SeatsTitle>Selecione o(s) assento(s)</SeatsTitle>
            <CineRoom>
                {seats.map(e => (
                    <RenderSeats
                        id={e.id}
                        isAvailable={e.isAvailable}
                        seatNumber={e.name}
                        seats={chosenSeats}
                        setSeats={setChosenSeats}
                        key={seats.id}
                    />
                ))}
            </CineRoom>

            <SeatTypes>
                
            </SeatTypes>

            <Link to={{ pathname: '/Checkout', state: {hour, date, id, chosenSeats}}}>
                <Button onClick={() => reserveSeats()}>Reservar assentos</Button>
            </Link>

            <Footer 
                id = {id}
                time = {hour}
                date = {date}
            />
        </article>
    );
}

const SeatsTitle = styled.h2`
    font-size: 20px;
    text-align: center;
`;

const CineRoom = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 1%;
`;

export const Button = styled.button`
    border: none;
    color: #FFF;
    background-color: #e3364d;
    padding: .5em 0;
    width: 60vw;
    border-radius: 3px;
    margin: 20px 20%;
    outline-style: none;
`;