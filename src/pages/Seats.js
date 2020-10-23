import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import RenderSeats from '../components/RenderSeats';
import Footer from '../components/Footer';
import SeatTypes from '../components/SeatTypes';
import Tickets from '../components/Tickets';
import { SeatsTitle, CineRoom, Screen, Button } from '../styles/seatStyles';

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
            <nav>
                <Button onClick={() => setOpenTickets(true)}>Reservar assentos</Button>
            </nav>
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