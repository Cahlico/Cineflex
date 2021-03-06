import React, { useContext } from 'react';
import styled from 'styled-components';

import MoviesContext from '../contexts/MoviesContext';
import MovieImg from '../components/MovieImg';

export default function Movies() {

    const { movies } = useContext(MoviesContext);

    return (
        <main>
            {movies.length
                ? <>
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
                : <Load src='../public/images/load.gif' />
            }
        </main>
    );
}

const MainTitle = styled.h2`
    font-size: 24px;
    text-align: center;
`;

const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 20px;
`;

const Load = styled.img`
    width: 40vw;
    margin-left: 30vw;
    padding-top: 50px;

    @media (max-width: 600px) {
        width: 100vw;
        margin: 0;
    }
`;