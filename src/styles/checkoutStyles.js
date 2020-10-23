import styled from 'styled-components';

export const SuccessMessage = styled.h2`
    font-size: 26px;
    text-align: center;
    margin: 0 23%;
`;

export const MovieConfirmation = styled.div`
    margin: 20px 20px;
    display: flex;

    img {
        width: 45vw;
        border-radius: 3px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    }

    span {
        flex-wrap: wrap;
    }

    span strong {
        display: block;
        font-size: 18px;
        padding: 10px; 
    }

    @media (min-width: 601px) {
        justify-content: center;
        img {
            width: 20vw;
        }
    }
`;

export const Seats = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;

    p {
        margin-right: 10px;
    }

    @media (min-width: 601px) {
        margin: 0 35%;
    }
`;