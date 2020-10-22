import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '../pages/Seats';

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

const TicketsPage = styled.div`
    position: absolute;
    height: 100vh;
    width: 70vw;
    top: 0;
    right: ${(props) => props.openTickets ? '0' : '-70vw'};
    background-color: #f5f5f5;
    z-index: 1;
    padding: 80px 20px;
    transition: .4s ease-in-out;

    h2 {
        font-size: 20px;
        font-weight: bold;
    }

    span {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
    }

    ion-icon {
        color: #e3364d;
        font-size: 20px;
    }
`;

const TicketsFilm = styled.div`
    position: absolute;
    height: 100vh;
    width: 30vw;
    top: 0;
    left: ${(props) => props.openTickets ? '0' : '-30vw'};;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1;
    transition: .4s ease-in-out;
`;