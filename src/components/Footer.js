import React, { useContext } from 'react';
import styled from 'styled-components';

import MoviesContext from '../contexts/MoviesContext';

export default function Footer(props) {

    const { id, weekday, date} = props;
    let img;
    let title;
    const { movies } = useContext(MoviesContext);

    movies.forEach(i => {
        if(i.id === id) {
            img = i.posterURL;
            title = i.title;
        }
    });


    return (
        <FooterContainer>
            <span>
                <img src={img} />
            </span>
            <span>
                <p>{title}</p>
                {weekday
                ? <p>{weekday} - {date}</p>
                : ''
                }
            </span>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    background-color: #cedbda;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100vw;
    display: flex;
    border-top: 2px solid #c3cdd9;
    align-items: center;

    img {
        margin: 10px 15px;
        height: 50px;
        border-radius: 3px;
        border: 5px solid #FFF;
    }

    p {
        color: #48575c;
        font-size: 14px;
    }
`;