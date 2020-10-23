import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '../styles/seatStyles';
import { TicketsPage, TicketsFilm } from '../styles/ticketStyles';

export default function Tickets(props) {

    const {openTickets, setOpenTickets, chosenSeats, id, hour, date } = props;
    const [fullTicket, setFullTicket] = useState(0);
    const [halfTicket, setHalfTicket] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        setFullTicket(chosenSeats.length -  halfTicket);
    }, [chosenSeats]);

    useEffect(() => {
        setTotalValue(fullTicket*22 + halfTicket*11);
    }, [fullTicket]);

    function changeType(type) {

        if(type === 'full' && fullTicket === chosenSeats.length) {
            return;
        } else if(type === 'half' && halfTicket === chosenSeats.length) {
            return;
        } else if(type === 'full') {
            setFullTicket(fullTicket + 1);
            setHalfTicket(halfTicket - 1);
        } else {
            setHalfTicket(halfTicket + 1);
            setFullTicket(fullTicket - 1);
        }
    }

    function reserveSeats() {
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/seats/book_many', { "ids": chosenSeats });
    }

    function filledSeat() {
        alert('O assento selecionado não está disponível');
    }

    return (
        <>
            <TicketsPage openTickets={openTickets}>
                <h2>Selecione o tipo de ingresso</h2>
                {chosenSeats.length
                ? <>
                    <span><p>Inteira</p></span>
                    <span>
                        <p>{fullTicket}</p>
                        <ion-icon name="add-circle" onClick={() => changeType('full')}></ion-icon>
                    </span>
                    <span><p>Meia</p></span>
                    <span>
                        <p>{halfTicket}</p>
                        <ion-icon name="add-circle" onClick={() => changeType('half')}></ion-icon>
                    </span>
                    <span>Valor total: R$ {totalValue.toFixed(2).replace('.', ',')}</span>

                    <Link to={{ pathname: '/Checkout', state: {hour, date, id, chosenSeats}}}>
                        <Button onClick={() => reserveSeats()}>Confirmar compra</Button>
                    </Link>
                </>
                : <span><p>Nenhum assento selecionado</p></span>
                }
            </TicketsPage>

            <TicketsFilm openTickets={openTickets} onClick={() => setOpenTickets(false)}/>
        </>
    );
}