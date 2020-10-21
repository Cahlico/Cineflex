import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation, Link, useHistory } from "react-router-dom";

import RenderSeats from '../components/RenderSeats';
import Footer from '../components/Footer';

export default function Seats() {

    const { state } = useLocation();
    const history = useHistory();
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
                <span>
                    <ion-icon name="ellipse"></ion-icon>
                    <p>Selecionado</p>
                </span>
                <Available>
                    <ion-icon name="ellipse"></ion-icon>
                    <p>Disponível</p>
                </Available>
                <Unavailable>
                    <ion-icon name="ellipse"></ion-icon>
                    <p>Indisponível</p>
                </Unavailable>
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
    margin: 20px 10%;
`;

const SeatTypes = styled.div`
    margin-left: 10%;
    & ion-icon {
        font-size: 7vw;
        color: #47bfbf;
    }
    span {
        display: block;
        position: relative;
    }
    p {
        display: inline-block;
        position: absolute;
        top: 4px;
        left: 30px;
    }
`;

const Available = styled.span`
    & ion-icon {
        font-size: 7vw;
        color: #6dd656;
    }
`;

const Unavailable = styled.span`
    & ion-icon {
        font-size: 7vw;
        color: #e3364d;
    }
`;

const Button = styled.button`
    border: none;
    color: #FFF;
    background-color: #e3364d;
    padding: .5em 0;
    width: 60vw;
    border-radius: 3px;
    margin: 20px 20%;
    outline-style: none;
`;