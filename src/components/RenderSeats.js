import React, { useState } from 'react';
import styled from 'styled-components';

export default function RenderSeats(props) {

    const { id, isAvailable, seatNumber, seats, setSeats} = props;
    const [selected, setSelected] = useState(false);

    function choseSeats() {

        if(isAvailable === false) {
            return;
        }

        if(selected === false) {
            setSeats([...seats, id]);
            setSelected(true);
        } else {
            const filteredSeats = seats.filter(e => {
                return e !== id;
            });
            setSeats([...filteredSeats]);
            setSelected(false);
        }
    }
 
    return (
         <Seat isAvailable={isAvailable} selected={selected} onClick={() => choseSeats()}>
            <ion-icon name="square"></ion-icon>
            <p>{seatNumber}</p>
        </Seat>
    );
}

const Seat = styled.div`
    margin: 5px 1px;
    position: relative;

    ion-icon {
        font-size: 9vw;
        color: ${(props) => props.selected
                                ? '#47bfbf' : props.isAvailable
                                                ? '#6dd656' : '#e3364d'};
    }
    p {
        font-size: 4vw;
        font-weight: bold;
        position: absolute;
        top: 9px;
        right: 8px;
        color: #FFF
    }


    @media (min-width: 601px) {
        ion-icon {
            font-size: 3.7vw;
        }

        p {
            font-size: 1.5vw;
        }
    }
`;