import React from 'react';
import styled from 'styled-components';
import Seats from '../pages/Seats';

export default function RenderSeats(props) {

    const { isAvailable, seatNumber} = props
    console.log(seatNumber);

    return (
        <>
            {isAvailable
            ? <Seat>
                <ion-icon name="ellipse-outline"></ion-icon>
                <p>{seatNumber}</p>
            </Seat>
            : <Seat>
                <ion-icon name="ellipse-outline" className='unavailable'></ion-icon>
                <p>{seatNumber}</p>
            </Seat>
            }
        </>
    );
}

const Seat = styled.div`
    margin: 5px 5px;

    ion-icon {
        background-color: #000;
        border-radius: 50%;
    }

    p {
        font-size: 10px;
        margin-left: 2px;
    }
`;