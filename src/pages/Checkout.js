import React, { useContext } from 'react';
import { useLocation, Link } from "react-router-dom";
import { SuccessMessage, MovieConfirmation, Seats } from '../styles/checkoutStyles';
import MoviesContext from '../contexts/MoviesContext';
import { Button } from '../styles/seatStyles';

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
                <img src={imgSrc} alt={title}/>
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
                <Button className='homeButton'>HOME</Button>
            </Link>
        </>
    );
}