import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";

import RenderSeats from '../components/RenderSeats';
import Footer from '../components/Footer';
import SeatTypes from '../components/SeatTypes';
import Tickets from '../components/Tickets';

export default function Seats() {

    const { state } = useLocation();
    const { time, date, id } = state;
    const hour = time.name
    const seats = time.seats;
    const [chosenSeats, setChosenSeats] = useState([]);
    const [openTickets, setOpenTickets] = useState(false);

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
                <Screen />
            </CineRoom>

            <SeatTypes />

            <Button onClick={() => setOpenTickets(true)}>Reservar assentos</Button>
            <Tickets
                openTickets={openTickets}
                setOpenTickets={setOpenTickets}
                chosenSeats={chosenSeats}
                id = {id}
                time = {hour}
                date = {date}
            />

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

const Screen = styled.div`
    width: 95%;
    background-color: #383637;
    color: #FFF;
    height: 5px;
    border-radius: 3px;
`;

export const Button = styled.button`
    border: none;
    color: #FFF;
    background-color: #e3364d;
    padding: .5em 0;
    width: 60%;
    border-radius: 3px;
    margin: 20px 20%;
    outline-style: none;
`;