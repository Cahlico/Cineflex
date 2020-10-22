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

    img {
        margin: 5px 15px;
        height: 50px;
        border-radius: 3px;
        border: 4px solid #FFF;
    }

    p {
        color: #FFF;
        font-size: 14px;
        margin: 5px 0;
    }

    ion-icon {
        position: fixed;
        color: #FFF;
        font-size: 18px;
        bottom: 42px;
        right: 10px;
    }
`;