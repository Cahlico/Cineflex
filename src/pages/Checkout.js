import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from "react-router-dom";

import MoviesContext from '../contexts/MoviesContext';

export default function Checkout() {

    const { state } = useLocation();
    const { hour, date, id, chosenSeats } = state;
    const { movies } = useContext(MoviesContext);
    let imgSrc;
    let title;

    movies.forEach(i => {
        if(i.id === id) {
            imgSrc = i.posterURL;
            title = i.title;
        }
    });

    return (
        <>
            <SuccessMessage>Pedido feito com sucesso</SuccessMessage>
            <MovieConfirmation>
                <img src={imgSrc} />
                <span>
                    <strong>{title}</strong>
                    <strong>{date}</strong>
                    <strong>{hour}</strong>
                </span>
            </MovieConfirmation>
            <Seats>
                {chosenSeats.map(seat => (
                    <p>Assento: {seat}</p>
                ))}
            </Seats>
        </>
    );
}

const SuccessMessage = styled.h2`
    font-size: 24px;
    text-align: center;
    margin: 0 23%;
`;

const MovieConfirmation = styled.div`
    margin: 20px 20px;
    display: flex;

    img {
        height: 160px;
    }

    span {
        flex-wrap: wrap;
    }

    span strong {
        display: block;
        font-size: 14px;
        padding: 10px; 
    }
`;

const Seats = styled.div`
    display: flex;
    margin: 20px;

    p {
        margin-right: 10px;
    }
`;