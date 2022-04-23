import styled from "styled-components/native";

import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(100)}px;
    background-color: ${theme.colors.shape};
    border-radius: ${RFValue(10)}px;
    justify-content: space-between;
    margin-bottom: ${RFValue(15)}px;
`;

export const AreaItem = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-left: ${RFValue(15)}px;
    padding-right: ${RFValue(15)}px;
    margin-top: ${RFValue(15)}px;
`;

export const AreaPrice = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-left: ${RFValue(15)}px;
    padding-right: ${RFValue(15)}px;
    margin-bottom: ${RFValue(10)}px;
`;

export const TxtItem = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
`;

export const TxtQtd = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text};
`;

export const TxtPriceUnd = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.text};
`;

export const TxtPriceTotal = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.title};
`;