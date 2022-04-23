import React from 'react';
import { Text } from 'react-native';

import {
    Container,
    AreaItem,
    AreaPrice,
    TxtItem,
    TxtQtd,
    TxtPriceUnd,
    TxtPriceTotal
} from './styles';

export const CardOrder = ({ title, qtd, priceUd, priceTotal, onpress }) => {
    return (
        <Container onPress={onpress}>
            <AreaItem>
                <TxtItem>{title}</TxtItem>
                <TxtQtd>x{qtd}</TxtQtd>
            </AreaItem>

            <AreaPrice>
                <TxtPriceUnd>R$ {priceUd}</TxtPriceUnd>
                <TxtPriceTotal>R$ {priceTotal}</TxtPriceTotal>
            </AreaPrice>
        </Container>
    );
}