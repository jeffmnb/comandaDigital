import React, { useState } from 'react';
import { Text } from 'react-native';

import {
    Container,
    NameClient,
    TxtValue,
    FooterCard,
    TxtTotal
} from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

export const CardTable = ({ name, onpress }) => {

    return (
        <Container style={{
            borderLeftColor: name == 'Adicionar' ? theme.colors.text : name != '' ? theme.colors.busy : theme.colors.free
        }} onPress={onpress}>
            <NameClient>{name == '' ? 'Vazia' : name == 'Adicionar' ? 'Adicionar' : 'Ocupada'}</NameClient>

            {
                name == 'Adicionar'
                    ? <Ionicons name="ios-add-circle-outline" size={RFValue(55)} color={theme.colors.textTransparent} />
                    : <MaterialCommunityIcons name="clipboard-text-outline" size={RFValue(55)} color={theme.colors.textTransparent} />
            }

            {
                name != '' && name != 'Adicionar' &&
                <FooterCard>
                    <TxtTotal>{name}</TxtTotal>
                </FooterCard>
            }

        </Container>
    );
}