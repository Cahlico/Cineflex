import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function RenderSchedule(props) {

    const { date, weekday, showtimes, id } = props;

    return (
        <>
            <Date>{weekday} - {date}</Date>

            {showtimes.map(time => (
                <Link to={{ pathname: '/Seats', state: {time, date, id}}}>
                    <Button>{time.name}</Button>
                </Link>
            ))}
        </>
    )
}

const Date = styled.p`
    padding: 20px 20px;
`;

const Button = styled.button`
    border: none;
    color: #FFF;
    background-color: #e3364d;
    padding: .5em .7em;
    border-radius: 3px;
    margin: 0 20px;
    outline-style: none;
`;