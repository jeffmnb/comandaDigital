import React, { useCallback, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import uuid from 'uuid';

import {
    Container,
    Header,
    ButtonBack,
    Head,
    TitleTable,
    TxtTotalValue,
    Content,
    AreaTitle,
    TxtCategory,
    TxtTitleItem,
    Actions,
    AreaAction,
    TxtQtd,
    AreaAmount,
    TxtPriceUn,
    TxtPriceTotal,
    TxtNameClient,
    InputObs,
    TxtObs,
    AreaButtons,
    BtnCancel,
    BtnSend,
    TxtBtnCancel,
    TxtBtnSend
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { Alert, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native';
import { addNewOrder, cancelItemForClient, editOrder, getAllOrders } from '../../Storage';

export const CreateOrder = () => {

    const Navigation = useNavigation();

    const Route = useRoute();

    const dataOrderClient = Route.params;

    // console.log(dataOrderClient);

    const [qtdItem, setQtdItem] = useState(dataOrderClient[1].qtd);

    const [totalAmount, setTotalAmount] = useState(dataOrderClient[1].value);

    const [obs, setObs] = useState(dataOrderClient[1].obs);


    useFocusEffect(useCallback(() => {
        calculateValues();

        console.log(dataOrderClient[1].value);
    }, [qtdItem]));


    const calculateValues = () => {

        let priceUd = dataOrderClient[1].priceUd;

        const totalAmount = qtdItem * priceUd;

        // console.log(dataOrderClient[0].item.id);


        setTotalAmount(totalAmount.toFixed(2));
    };


    const subQtdItem = () => {
        setQtdItem(oldValue => Number(oldValue) - 1);

        if (qtdItem < 1) {
            setQtdItem(oldValue => Number(oldValue) + 1);

            return alert('Quantidade não pode ser menor que zero');
        }
    };

    const orderClient = {
        id: dataOrderClient[1].id,
        title: dataOrderClient[1].title,
        value: totalAmount,
        priceUd: dataOrderClient[1].priceUd,
        qtd: qtdItem,
        categoryItem: dataOrderClient[1].categoryItem,
        obs: obs
    };

    const sendOrder = async () => {

        const idClient = dataOrderClient[0].item.id;

        await editOrder(idClient, orderClient);


        Navigation.navigate('ClientOrders', dataOrderClient[0]);


        // nao ta deletando e esta salvando um outro ao invez de sobrescrever (deletar)

    };

    const getCancel = async () => {
        const idClient = dataOrderClient[0].item.id;

        await cancelItemForClient(idClient, orderClient);

        Navigation.navigate('ClientOrders', dataOrderClient[0]);
    };


    const cancelOrder = async () => {

        Alert.alert('Heyy', 'Deseja cancelar este pedido?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => (
                    getCancel()
                )
            }
        ]);
    };

    return (
        <Container>

            <ScrollView>

                <Header>
                    <Head>
                        <ButtonBack>
                            <MaterialIcons name="keyboard-arrow-left" size={RFValue(40)} color={theme.colors.shape} onPress={() => Navigation.goBack()} />
                        </ButtonBack>

                        <TitleTable>Lançamento de item</TitleTable>
                    </Head>
                    <TxtNameClient>Mesa: {dataOrderClient[0].item.nameClient}</TxtNameClient>

                    <TxtTotalValue>R$ {totalAmount}</TxtTotalValue>

                </Header>


                <Content>
                    <AreaTitle>
                        <TxtCategory>{dataOrderClient[1].categoryItem}</TxtCategory>

                        <TxtTitleItem>{dataOrderClient[1].title}</TxtTitleItem>
                    </AreaTitle>

                    <AreaAction>

                        <Actions>
                            <Ionicons name="remove-circle" size={RFValue(35)} color={theme.colors.primary} onPress={() => subQtdItem()} />
                            <TxtQtd>{qtdItem}</TxtQtd>
                            <Ionicons name="add-circle" size={RFValue(35)} color={theme.colors.primary} onPress={() => setQtdItem(oldValue => Number(oldValue) + 1)} />
                        </Actions>

                        <AreaAmount>
                            <TxtPriceUn>R$ {dataOrderClient[1].priceUd}</TxtPriceUn>

                            <TxtPriceTotal>R$ {totalAmount}</TxtPriceTotal>
                        </AreaAmount>

                    </AreaAction>

                    <TxtObs>Adicione uma observação</TxtObs>

                    <InputObs defaultValue={dataOrderClient[1].obs} onChangeText={text => setObs(text)} placeholder='OPCIONAL' multiline style={{ textAlignVertical: 'top', paddingTop: 10, paddingLeft: 10 }} />

                    <AreaButtons>
                        <BtnCancel onPress={() => cancelOrder()}>
                            <TxtBtnCancel>Cancelar</TxtBtnCancel>
                        </BtnCancel>

                        <BtnSend>
                            <TxtBtnSend onPress={() => sendOrder()}>Lançar</TxtBtnSend>
                        </BtnSend>
                    </AreaButtons>

                </Content>

            </ScrollView>

        </Container>
    );
}