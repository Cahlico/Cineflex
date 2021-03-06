import React from 'react';
import styled from 'styled-components';

export default function Header() {

    return (
        <AppHeader>
            <h1>CINEFLEX</h1>
        </AppHeader>
    );
}

const AppHeader = styled.header`
    background-color: #383637;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    z-index: 10;

    h1 {
        font-size: 36px;
        color: #e3364d;
        font-weight: bold;
        letter-spacing: 3px;
    }
`;