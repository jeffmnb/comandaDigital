import styled from 'styled-components/native';

import theme from '../../styles/theme';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
`;

export const Header = styled.View`
    background-color: ${theme.colors.primary};
    width: 100%;
    height: ${Platform.OS == 'ios' ? hp('15%') : hp('18%')};
    padding-left: ${RFValue(10)}px;
    margin-top: ${Platform.OS == 'ios' ? getStatusBarHeight() + 15 : wp('0%')};
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${theme.colors.background};
    align-items: flex-start;
    padding-left: ${wp('7%')};
    padding-right: ${wp('7%')};
    border-top-right-radius: ${wp('5.5%')};
    border-top-left-radius: ${wp('5.5%')};
`;

export const Head = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${wp('4%')};
`;

export const TitleTable = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${theme.colors.shape};
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;

export const TxtTotalValue = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(25)}px;
  color: ${theme.colors.shape};
  text-align: center;
  margin-top: ${RFValue(25)}px;
`;

export const TxtItens = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${theme.colors.title};
  margin-top: ${RFValue(25)}px;
  margin-bottom: ${RFValue(25)}px;
`;

export const ListOrders = styled.FlatList`
`;

export const Footer = styled.View`
  width: 100%;
  height: ${RFValue(170)}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: ${RFValue(20)}px;
  padding-right: ${RFValue(20)}px;
`;

export const BtnAdd = styled.TouchableOpacity``;

export const TxtCloseTable = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.primary};
`;

export const BtnCloseTable = styled.TouchableOpacity`
border-width: ${RFValue(2)}px;
border-color: ${theme.colors.primary};
border-radius: ${RFValue(30)}px;
padding: ${RFValue(10)}px;
`;

export const ContainerCard = styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    position: absolute;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.View`
    width: 80%;
    background-color: ${theme.colors.background};
    padding: ${RFValue(15)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(10)}px;
`;

export const TxtNewClient = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${theme.colors.title};
  text-align: center;
`;

export const InputNameClient = styled.TextInput`
  width: ${RFValue(200)}px;
  height: ${RFValue(40)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${theme.colors.title};
  border-radius: ${RFValue(7)}px;
  margin-top: ${RFValue(25)}px;
  padding-left: ${RFValue(10)}px;
`;

export const ButtonContinue = styled.TouchableOpacity`
    margin-top: ${RFValue(30)}px;
`;

export const TxtContinue = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.primary};
`;

export const AreaTxtNotData = styled.View`
  flex: 1;
  width: 100%;
  height: ${RFValue(300)}px;
  justify-content: center;
  align-items: center;
`;

export const TxtNotData = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  color: ${theme.colors.text};
  text-align: center;
  line-height: ${RFValue(30)}px;
`;

export const SearchTables = styled.TextInput`
    width: 100%;
    height: ${RFValue(40)}px;
    border-width: 1px;
    border-color: ${theme.colors.text};
    border-radius: ${RFValue(7)}px;
    padding-left: 10px;
`;

export const AreaSearch = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const AreaButtonSearch = styled.TouchableOpacity`
    position: absolute;
    right: ${wp('4%')};
    top: ${wp('2.3%')};
`;

export const AreaNotDataItems = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  margin-top: ${RFValue(100)}px;
  justify-content: center;
  align-items: center;
`;

export const TxtNotDataItems = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${theme.colors.text};
  text-align: center;
  line-height: ${RFValue(30)}px;
`;

export const HeaderModalClose = styled.View`
  width: 100%;
  height: ${RFValue(120)}px;
  background-color: 'rgba(16,16,16,0.05)';
  border-radius: ${RFValue(10)}px;
  justify-content: space-between;
  align-items: center;
  padding-top: ${RFValue(15)}px;
  padding-bottom: ${RFValue(15)}px;
`;

export const TxtClient = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${theme.colors.title};
`;

export const TXtValueClient = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(25)}px;
  color: ${theme.colors.title};
  text-align: center;
`;

export const TxtShare = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${theme.colors.title};
  text-align: center;
  margin-top: ${RFValue(50)}px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(20)}px;
`;

export const TxtQtd = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.title};
  margin-left: ${RFValue(7)}px;
  margin-right: ${RFValue(7)}px;
`;

export const TxtSubTotal = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.text};
  text-align: center; 
`;

export const BtnCloseAll = styled.TouchableOpacity`
  width: ${RFValue(120)}px;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(10)}px;
  background-color: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: ${RFValue(70)}px;
`;

export const TxtCloseAll = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.shape};
`;