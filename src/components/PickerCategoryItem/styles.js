import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

export const Container = styled.TouchableOpacity`
    width: ${RFValue(100)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(10)}px;
    margin-right: ${RFValue(7)}px;
    justify-content: center;
    align-items: center;
    margin-top: ${RFValue(35)}px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
`;