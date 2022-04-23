import styled from "styled-components/native";

import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.TouchableOpacity`
    width: ${wp('40%')};
    height: ${wp('44%')}px;
    background-color: ${theme.colors.shape};
    border-left-width: ${RFValue(6)}px;
    border-radius: ${RFValue(7)}px;
    align-items: center;
    margin-right: ${RFValue(20)}px;
    margin-bottom: ${RFValue(20)}px;
`;

export const NameClient = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.title};
    text-align: center;
    margin-top: ${RFValue(10)}px;
    margin-bottom: ${RFValue(22)}px;
`;

export const TxtValue = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.title};
    margin-top: ${RFValue(18)}px;
`;

export const TxtTotal = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.title};
    margin-top: ${RFValue(18)}px;
`;

export const FooterCard = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

`;