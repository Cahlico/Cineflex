import React from 'react';
import styled from 'styled-components';
import { useLocation, useHistory } from "react-router-dom";

import RenderSchedule from '../components/RenderSchedule';
import Footer from '../components/Footer';

export default function Timetable() {

    const { state } = useLocation();
    const history = useHistory();
    const timeTable = state.days;

    return (
        <article>
            <ScheduleTitle>Selecione o horário</ScheduleTitle>
            <Schedule>
                {timeTable.map(i => (
                    <RenderSchedule
                        date = {i.date}
                        weekday = {i.weekday}
                        showtimes = {i.showtimes}
                        id = {state.id}
                        key = {i.id}
                    />
                ))}
            </Schedule>

            <Footer 
                id = {state.id}
                time = {null}
                date = {null}
            />
        </article>
    );
}

const ScheduleTitle = styled.h2`
    font-size: 20px;
    text-align: center;

    
`;

const Schedule = styled.div`
    padding-bottom: 90px;
`;