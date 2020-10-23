import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MovieImg({ movie }) {

    return (
        <Link to={{ pathname: '/Timetable', state: movie}}>
            <Image src={movie.posterURL} />
        </Link>
    );
}

const Image = styled.img`
    width: 15vw;
    margin: 10px 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    border-radius: 3px;

    @media (max-width: 600px) {
        width: 30vw;
    }
`;