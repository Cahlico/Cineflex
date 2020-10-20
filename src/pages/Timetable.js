import React from 'react';
import styled from 'styled-components';

export default function Timetable() {
    return (
        <ScheduleTitle>Selecione o horário</ScheduleTitle>
    );
}

const ScheduleTitle = styled.h2`
    padding-top: 80px;
    font-size: 20px;
    text-align: center;
`;