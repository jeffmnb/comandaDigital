import React from 'react';

import {
    Container,
    TitleItem,
    TxtValue
} from './styles';

export const CardItem = ({ title, value, onpress }) => {
    return (
        <Container onPress={onpress}>
            <TitleItem>{title}</TitleItem>
            <TxtValue>R$ {value}</TxtValue>
        </Container>
    );
};