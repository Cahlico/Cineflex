import React from 'react';
import styled from 'styled-components';

export default function SeatTypes() {
    return (
        <SeatStyle>
            <span>
                <ion-icon name="ellipse"></ion-icon>
                <p>Selecionado</p>
            </span>
            <Available>
                <ion-icon name="ellipse"></ion-icon>
                <p>Disponível</p>
            </Available>
            <Unavailable>
                <ion-icon name="ellipse"></ion-icon>
                <p>Indisponível</p>
            </Unavailable>
        </SeatStyle>
    );
}

const SeatStyle = styled.div`
    margin-left: 10%;
    & ion-icon {
        font-size: 6vw;
        color: #47bfbf;
        border: 2px solid #47bfbf;
        border-radius: 50%;
    }
    span {
        display: block;
        position: relative;
    }
    p {
        display: inline-block;
        position: absolute;
        top: 4px;
        left: 30px;
    }

    @media (min-width: 601px) {
        margin-left: 2%;

        p {
            top: 9px;
            left: 3%;
        }

        & ion-icon {
            font-size: 2vw;
        }
    }
`;

const Available = styled.span`
    & ion-icon {
        font-size: 6vw;
        color: #6dd656;
        border-color: #6dd656;
    }

    @media (min-width: 601px) {
        & ion-icon {
            font-size: 2vw;
        }
    }
`;

const Unavailable = styled.span`
    & ion-icon {
        font-size: 6vw;
        color: #e3364d;
        border-color: #e3364d;
    }


    @media (min-width: 601px) {
        & ion-icon {
            font-size: 2vw;
        }
    }
`;