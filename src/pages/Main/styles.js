import styled from 'styled-components/native';

import theme from '../../styles/theme';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Platform } from 'react-native';

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
    padding-left: ${wp('7%')};
    padding-right: ${wp('7%')};
    margin-top: ${Platform.OS == 'ios' ? hp('5%') : hp('2%')}
`;

export const Top = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const AreaWelcome = styled.View`
  margin-top: ${hp('1.5%')};
`;

export const Greeting = styled.Text`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.shape};
    font-size: ${hp('3%')};
`;

export const MessageForUser = styled.Text`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.shape};
    font-size: ${hp('1.7%')};
`;

export const TxtDate = styled.Text`
    margin-top: ${hp('2.7%')};
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.shape};
    font-size: ${hp('2.2%')};
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${theme.colors.background};
    align-items: center;
    border-top-right-radius: ${wp('5.5%')};
    border-top-left-radius: ${wp('5.5%')};
`;

export const SearchTables = styled.TextInput`
    width: ${wp('86%')};
    height: ${Platform.OS == 'ios' ? hp('5%') : hp('6%')};
    border-width: 1px;
    border-color: ${theme.colors.text};
    margin-top: ${Platform.OS == 'ios' ? hp('3%') : hp('3.5%')};
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
    right: ${wp('9%')};
    top: ${Platform.OS == 'ios' ? wp('8.5%') : wp('9%')};
`;

export const TxtTables = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.title};
    margin-top: ${RFValue(30)}px;
    margin-bottom: ${RFValue(30)}px;
`;

export const ListTables = styled.FlatList`
    width: 100%;
    margin-left: ${RFValue(38)}px;
`;

export const AreaButons = styled.View`
    width: 100%;
    height: ${RFValue(150)}px;
    justify-content: space-around;
    align-items: center;
`;

export const BtnCreate = styled.TouchableOpacity`
    width: ${RFValue(160)}px;
    height: ${RFValue(50)}px;
    border-radius: ${RFValue(10)}px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
`;

export const TxtCreate = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.shape};
`;

export const BtnEdit = styled.TouchableOpacity`
    width: ${RFValue(160)}px;
    height: ${RFValue(50)}px;
    border-width: ${RFValue(2)}px;
    border-color: ${theme.colors.primary};
    border-radius: ${RFValue(10)}px;
    justify-content: center;
    align-items: center;
`;

export const TxtEdit = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.primary};
`;

export const TxtCategory = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
    text-align: center;
    line-height: ${RFValue(25)}px;
`;

export const Form = styled.View`
    width: 100%;
    margin-top: ${RFValue(35)}px;
    justify-content: center;
    align-items: center;
`;

export const TxtInputTitle = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
    margin-bottom: ${RFValue(12)}px;
`;

export const TextInputTitle = styled.TextInput`
    width: 90%;
    height: ${RFValue(45)}px;
    border-radius: ${RFValue(10)}px;
    background-color: 'rgba(16,16,16,0.05)';
    text-align: center;
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.text};
`;

export const TxtInputValue = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
    margin-top: ${RFValue(30)}px;
    margin-bottom: ${RFValue(12)}px;
`;

export const TextInputValue = styled.TextInput`
    width: 30%;
    height: ${RFValue(45)}px;
    border-radius: ${RFValue(10)}px;
    background-color: 'rgba(16,16,16,0.05)';  
    text-align: center;
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.text};
`;

export const BtnSend = styled.TouchableOpacity`
    width: ${RFValue(120)}px;
    height: ${RFValue(50)}px;
    border-width: ${RFValue(2)}px;
    border-radius: ${RFValue(10)}px;
    border-color: ${theme.colors.primary};
    justify-content: center;
    align-items: center;
    margin-top: ${RFValue(50)}px;
`;

export const TxtSend = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.primary};
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
