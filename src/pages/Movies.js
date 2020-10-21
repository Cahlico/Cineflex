import React, { useContext } from 'react';
import styled from 'styled-components';

import MoviesContext from '../contexts/MoviesContext';
import MovieImg from '../components/MovieImg';

export default function Movies() {

    const { movies } = useContext(MoviesContext);
    console.log(movies)

    return (
        <>
            <MainTitle>Selecione o filme</MainTitle>
            <MoviesContainer>
                {movies.map(movie => (
                    <MovieImg 
                        movie = {movie}
                        key = {movie.title}
                    />
                ))}
            </MoviesContainer>
        </>
    );
}

const MainTitle = styled.h2`
    padding-top: 80px;
    font-size: 20px;
    text-align: center;
`;

const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 20px;
`;