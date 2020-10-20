import React from 'react';
import styled from 'styled-components';

export default function Seats() {
    return (
        <SeatsTitle>Selecione o horário</SeatsTitle>
    );
}

const SeatsTitle = styled.h2`
    padding-top: 80px;
    font-size: 20px;
    text-align: center;
`;