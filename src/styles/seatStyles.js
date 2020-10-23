import styled from 'styled-components';

export const SeatsTitle = styled.h2`
    font-size: 24px;
    text-align: center;

    @media (min-width: 601px) {
        text-align: left;
        margin-left: 8%;
}
`;

export const CineRoom = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 15px 1%;


    @media (min-width: 601px) {
        width: 40vw;
    }
`;

export const Screen = styled.div`
    width: 95%;
    background-color: #383637;
    color: #FFF;
    height: 5px;
    border-radius: 3px;
`;

export const Button = styled.button`
    border: none;
    color: #FFF;
    background-color: #e3364d;
    padding: .5em 0;
    width: 60%;
    border-radius: 3px;
    margin: 20px 20%;
    outline-style: none;

    &.homeButton {
        width: 40%;
        margin: 20px 30%;
    }
`;