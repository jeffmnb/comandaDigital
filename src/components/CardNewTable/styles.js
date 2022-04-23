import styled from "styled-components/native";

import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

export const Container = styled.TouchableOpacity`
    width: ${RFValue(160)}px;
    height: ${RFValue(160)}px;
    border-left-width: ${RFValue(6)}px;
    border-left-color: ${theme.colors.text};
    background-color: ${theme.colors.shape};
    border-radius: ${RFValue(7)}px;
    align-items: center;
    margin-right: ${RFValue(20)}px;
    margin-bottom: ${RFValue(20)}px;
`;