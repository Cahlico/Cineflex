import React from 'react';
import styled from 'styled-components';

export default function Movies() {
    return (
        <MainTitle>Selecione o filme</MainTitle>
    );
}

const MainTitle = styled.h2`
    padding-top: 80px;
    font-size: 20px;
    text-align: center;
`;