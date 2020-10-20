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
    background-color: #c3cdd9;
    text-align: center;
    padding: 10px 0;
    letter-spacing: 3px;
    position: fixed;
    width: 100vw;

    h1 {
        font-size: 24px;
        color: #e8773f;
        font-weight: bold;
    }
`;