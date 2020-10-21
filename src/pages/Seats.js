import React from 'react';
import styled from 'styled-components';
import { useLocation, useHistory } from "react-router-dom";

export default function Seats() {

    const { state } = useLocation();
    const history = useHistory();
    const { showtimes, date, id } = state;
    const seats = showtimes.seats;

    return (
        <>
            <SeatsTitle>Selecione o horário</SeatsTitle>
            {/*seats.map(e => (
                <RenderSeats
                available={seats.isAvailable}
                index={seats.name}
                key={seats.id}
                seats icon -> <ion-icon name="ellipse-outline"></ion-icon>
                />
            ))*/}
        </>
    );
}

const SeatsTitle = styled.h2`
    font-size: 20px;
    text-align: center;
`;