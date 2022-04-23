import React from 'react';
import theme from '../../styles/theme';

import {
    Container,
    Title
} from './styles';

export const PickerCategoryItem = ({ title, actived, onpress }) => {
    return (
        <Container style={{ backgroundColor: actived ? '#ec7154' : 'rgba(16,16,16,0.05)' }} onPress={onpress}>
            <Title style={{ color: actived ? theme.colors.background : theme.colors.text }}>{title}</Title>
        </Container>
    );
}