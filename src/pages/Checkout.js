import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from "react-router-dom";

import MoviesContext from '../contexts/MoviesContext';
import { Button } from './Seats';

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

            <Link to='/'>
                <Button>HOME</Button>
            </Link>
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
        width: 45vw;
        border-radius: 3px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    }

    span {
        flex-wrap: wrap;
    }

    span strong {
        display: block;
        font-size: 16px;
        padding: 10px; 
    }
`;

const Seats = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;

    p {
        margin-right: 10px;
    }
`;