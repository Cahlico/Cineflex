import React from 'react';
import styled from 'styled-components';
import { useLocation, useHistory } from "react-router-dom";

import RenderSeats from '../components/RenderSeats';
import Footer from '../components/Footer';

export default function Seats() {

    const { state } = useLocation();
    const history = useHistory();
    const { time, date, id } = state;
    const seats = time.seats;

    return (
        <article>
            <SeatsTitle>Selecione o(s) assento(s)</SeatsTitle>
            <CineRoom>
                {seats.map(e => (
                    <RenderSeats
                        isAvailable={e.isAvailable}
                        seatNumber={e.name}
                    key={seats.id}
                    />
                ))}
            </CineRoom>

            <Footer 
                id = {id}
                time = {time.name}
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
    margin: 20px;
`;