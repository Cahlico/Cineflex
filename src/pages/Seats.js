import React from 'react';
import styled from 'styled-components';

export default function Seats() {
    return (
        <>
            <SeatsTitle>Selecione o horário</SeatsTitle>
            {/*seats.map((e, i) => (
                <RenderSeats
                status={status}
                index={i}
                key={i}
                seats icon -> <ion-icon name="ellipse-outline"></ion-icon>
                />
            ))*/}
        </>
    );
}

const SeatsTitle = styled.h2`
    padding-top: 80px;
    font-size: 20px;
    text-align: center;
`;