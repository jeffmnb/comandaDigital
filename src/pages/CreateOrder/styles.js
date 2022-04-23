import styled from "styled-components/native";
import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Platform } from "react-native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${theme.colors.background};
`;

export const Header = styled.View`
    background-color: ${theme.colors.primary};
    width: 100%;
    height: ${Platform.OS == 'ios' ? wp('54%') : wp('46.4%')};
    padding-left: ${RFValue(10)}px;
    padding-top: ${Platform.OS == 'ios' ? wp('10%') : wp('0%')};
`;

export const Head = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${RFValue(15)}px;
`;

export const TitleTable = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${theme.colors.shape};
  left: ${RFValue(50)}px;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;

export const TxtNameClient = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${theme.colors.shape};
  margin-left: ${RFValue(50)}px;
  margin-top: ${RFValue(5)}px;
`;

export const TxtTotalValue = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(28)}px;
  color: ${theme.colors.shape};
  text-align: center;
  margin-top: ${RFValue(25)}px;
  margin-right: ${RFValue(25)}px;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${theme.colors.background};
    align-items: flex-start;
    padding-left: ${RFValue(25)}px;
    padding-right: ${RFValue(25)}px;
    border-top-right-radius: ${RFValue(20)}px;
    border-top-left-radius: ${RFValue(20)}px;
    bottom: ${RFValue(17)}px;
`;

export const AreaTitle = styled.View`
  width: 100%;
  margin-top: ${RFValue(25)}px;
`;

export const TxtCategory = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.text};
  margin-bottom: ${RFValue(7)}px;
`;

export const TxtTitleItem = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.title};
`;

export const AreaAction = styled.View`
  width: 100%;
  margin-top: ${RFValue(20)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TxtQtd = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(19)}px;
  color: ${theme.colors.title};
  margin-left: ${RFValue(7)}px;
  margin-right: ${RFValue(7)}px;
`;

export const AreaAmount = styled.View`
  width: 50%;
  align-items: flex-end;
`;

export const TxtPriceUn = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.text};
`;

export const TxtPriceTotal = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.primary};
`;

export const TxtObs = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.title};
  width: 100%;
  text-align: center;
  margin-top: ${RFValue(60)}px;
`;

export const InputObs = styled.TextInput`
  width: 100%;
  height: ${RFValue(150)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${theme.colors.text};
  border-radius: ${RFValue(10)}px;
  margin-top: ${RFValue(20)}px;
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${theme.colors.title};
`;

export const AreaButtons = styled.View`
  width: 100%;
  margin-top: ${RFValue(50)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BtnCancel = styled.TouchableOpacity`
  width: ${RFValue(140)}px;
  height: ${RFValue(50)}px;
  border-width: ${RFValue(1)}px;
  border-radius: ${RFValue(70)}px;
  border-color: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const BtnSend = styled.TouchableOpacity`
  width: ${RFValue(140)}px;
  height: ${RFValue(50)}px;
  background-color: ${theme.colors.primary};
  border-radius: ${RFValue(70)}px;
  justify-content: center;
  align-items: center;
`;

export const TxtBtnCancel = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.primary};
`;

export const TxtBtnSend = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.background};
`;