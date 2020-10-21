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
                    <p>Assento {seat}</p>
                ))}
            </Seats>
        </>
    );
}