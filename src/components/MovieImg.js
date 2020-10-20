import React from 'react';
import styled from 'styled-components';

export default function MovieImg({ img }) {

    return (
        <Image src={img} />
    );
}

const Image = styled.img`
    height: 150px;
    margin: 10px 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    border-radius: 3px;
`;