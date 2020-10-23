import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import MoviesContext from '../contexts/MoviesContext';

export default function Footer(props) {

    const history = useHistory();
    const { id, time, date} = props;
    let imgSrc;
    let title;
    const { movies } = useContext(MoviesContext);

    movies.forEach(i => {
        if(i.id === id) {
            imgSrc = i.posterURL;
            title = i.title;
        }
    });


    return (
        <FooterContainer>
            <span>
                <img src={imgSrc} />
            </span>
            <span>
                <p>{title}</p>
                {time
                ? <p>{time} - {date}</p>
                : ''
                }
            </span>
            <ion-icon name="return-up-back-outline" onClick={() => history.goBack()}></ion-icon>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    background-color: #454545;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100vw;
    display: flex;
    border-top: 2px solid #383637;
    align-items: center;
    z-index: 10;

    img {
        margin: 5px 15px;
        height: 8vh;
        border-radius: 3px;
        border: 4px solid #FFF;
    }

    p {
        color: #FFF;
        font-size: 18px;
        margin: 5px 0;
    }

    ion-icon {
        position: fixed;
        color: #FFF;
        font-size: 22px;
        bottom: 7%;
        right: 10px;
    }

    @media (min-width: 601px) {
        img {
            margin: 5px 2vw;
            height: 10vh;
        }
    }
`;