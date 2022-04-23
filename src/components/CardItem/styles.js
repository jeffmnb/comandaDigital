import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(80)}px;
    background-color: rgba(16,16,16,0.05);
    justify-content: space-between;
    margin-top: ${RFValue(10)}px;
    padding-top: ${RFValue(10)}px;
    padding-bottom: ${RFValue(7)}px;
    padding-left: ${RFValue(10)}px;
    border-radius: ${RFValue(10)}px;
`;

export const TitleItem = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text};
`;

export const TxtValue = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text};`;