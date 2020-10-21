import React, { useState } from 'react';
import styled from 'styled-components';

export default function RenderSeats(props) {

    const { id, isAvailable, seatNumber} = props
    const [seats, setSeats] = useState([]);
    const [selected, setSelected] = useState(false);

    function choseSeats() {

        if(selected === false) {
            setSeats([...seats, id]);
            setSelected(true);
        }

        else {
            seats.filter(e => {
                return e !== id;
            });
            setSeats(...seats);
            setSelected(false);
        }
    }
 
    return (
         <Seat isAvailable={isAvailable} selected={selected}>
            <ion-icon name="ellipse" onClick={() => choseSeats()}></ion-icon>
            <p>{seatNumber}</p>
        </Seat>
    );
}

const Seat = styled.div`
    margin: 5px 3px;

    ion-icon {
        font-size: 6vw;
        color: ${(props) => props.selected
                                ? '#47bfbf' : props.isAvailable
                                                ? '#6dd656' : '#e3364d'};
    }

    p {
        font-size: 10px;
        margin-left: 4px;
    }
`;