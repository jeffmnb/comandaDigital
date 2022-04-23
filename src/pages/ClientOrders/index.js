import React, { useCallback, useRef, useState } from 'react';

import {
    Container,
    Content,
    Header,
    Head,
    TitleTable,
    ButtonBack,
    TxtTotalValue,
    TxtItens,
    ListOrders,
    Footer,
    BtnAdd,
    TxtCloseTable,
    BtnCloseTable,
    ContainerCard,
    Card,
    TxtNewClient,
    InputNameClient,
    ButtonContinue,
    TxtContinue,
    AreaTxtNotData,
    TxtNotData,
    AreaSearch,
    SearchTables,
    AreaButtonSearch,
    AreaNotDataItems,
    TxtNotDataItems,
    HeaderModalClose,
    TxtClient,
    TXtValueClient,
    Actions,
    TxtQtd,
    TxtShare,
    TxtSubTotal,
    BtnCloseAll,
    TxtCloseAll
} from './styles';

import { useRoute, useFocusEffect } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import { CardOrder } from '../../components/CardOrder';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import { addNewOrder, deleteClient, editOrder, editValueClient, getAllClients, getAllItems, getAllOrders, saveNewClient } from '../../Storage';
import { Modalize } from 'react-native-modalize';
import { PickerCategoryItem } from '../../components/PickerCategoryItem';
import { Alert, FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import categories from '../../utils/categories';
import { CardItem } from '../../components/CardItem';

export const ClientOrders = () => {

    const [nameClient, setNameClient] = useState('');

    const [showCardNewClient, setShowCardNewClient] = useState(false);

    const [ordersOfClient, setOrdersOfClient] = useState([]);

    const [totalValue, setTotalValue] = useState('00,00');

    const [pickerCatogorySelected, setPickerCatogorySelected] = useState('Todos');

    const [allItems, setAllItems] = useState([]);

    const [inputSearchItem, setInputSearchItem] = useState('');

    const [qtdItem, setQtdItem] = useState(1);

    const [valueShared, setValueShared] = useState();

    const Route = useRoute();

    const dataClient = Route.params;

    const modalActived = useRef(false);

    const modalActivedCloseOrder = useRef(false);

    const Navigation = useNavigation();


    useFocusEffect(useCallback(() => {

        getDataClient();

        getAllOrdersOfClient();

        getAllItemsStoraged();

        // console.log(dataClient);

    }, [dataClient]));


    useFocusEffect(useCallback(() => {

        sumTotalValue();

    }, [ordersOfClient]))


    const getAllOrdersOfClient = async () => {
        let data = await getAllOrders(dataClient.item.id);

        // console.log(dataClient.item.id);

        const dataSort = data.sort();

        setOrdersOfClient(dataSort);

        // console.log(ordersOfClient);
    };

    const getDataClient = () => {
        setNameClient(dataClient.item.nameClient);

        if (dataClient.item.nameClient == '') {
            setShowCardNewClient(true);
        }
    };

    const handleSubmitName = async () => {
        dataClient.item.nameClient = nameClient;

        if (nameClient == '' || nameClient == ' ' || nameClient == '  ') {
            return alert('Favor escolher um nome')
        }

        setShowCardNewClient(false);

        const newClient = {
            id: String(uuid.v4()),
            nameClient: nameClient,
            orders: [],
            valueTotal: '00,00',
        };

        await saveNewClient(newClient);

    };


    const handleAddNewOrder = async () => {

        // let ordersStoraged = await getAllOrders(dataClient.item.id);

        // ordersStoraged.push({
        //     id: String(uuid.v4()),
        //     title: 'CERVEJA SKOL 300ML',
        //     value: '3.00',
        //     priceUd: '3.00',
        //     qtd: '1',
        //     categoryItem: 'BEBIDAS',
        //     obs: ''
        // });

        // await addNewOrder(dataClient.item.id, ordersStoraged);

        modalActived.current?.open();
    };

    const handleOpenOrder = (item) => {

        const data = [dataClient, item];

        Navigation.navigate('CreateOrder', data);
    };

    const handleOpenOrderByMenu = (item) => {


        // console.log(item);

        const itemExist = ordersOfClient.filter(itemOrder => itemOrder.title == item.title);

        if (itemExist.length > 0) {
            return Alert.alert('Heyy', 'Este item já foi inserido na comanda!')
        } else {
            const data = [dataClient, item];

            Navigation.navigate('CreateOrder', data);
        }
    };

    const sumTotalValue = () => {

        let sum = 0;

        ordersOfClient.map(item => {

            sum += Number(item.value);

            setTotalValue(sum.toFixed(2));
        });
    };

    const handlePickerCategorySelected = async (item) => {
        setPickerCatogorySelected(item.titleCategory);

        let allItems = await getAllItems();

        const result = allItems.filter(itemStoraged => itemStoraged.categoryItem == item.titleCategory);

        setAllItems(result);

        if (item.titleCategory == 'Todos') {
            return setAllItems(allItems);
        }
    };

    const getAllItemsStoraged = async () => {
        const data = await getAllItems();

        setAllItems(data);
    };

    const handleChangeSearchItem = async (text) => {
        setInputSearchItem(text);

        let allItems = await getAllItems();

        const result = allItems.filter(itemStoraged => itemStoraged.title.match(text));

        setAllItems(result);
    };

    const subQtdItem = () => {

        if (qtdItem < 2) {
            setQtdItem(oldValue => Number(oldValue) + 1);

            return alert('Quantidade não pode ser menor que uma pessoa.');
        };

        setQtdItem(oldValue => Number(oldValue) - 1);

        if (totalValue == '00,00') {
            setValueShared(0);
            return Alert.alert('Aviso', 'Não hà items para serem pagos.');
        }

        setValueShared(totalValue / (qtdItem - 1));
    };

    const addQtdItem = () => {

        setQtdItem(oldValue => Number(oldValue) + 1);

        if (totalValue == '00,00') {
            setValueShared(0);
            return Alert.alert('Aviso', 'Não hà items para serem pagos.');
        }

        setValueShared(totalValue / (qtdItem + 1));
    };

    const closeTable = () => {
        Alert.alert('Aviso', 'Deseja fechar a conta?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        await deleteClient(dataClient);

                        Navigation.navigate('Main')
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        ]);
    };

    return (
        <Container>

            {

                dataClient.item.nameClient != '' &&

                <Header>
                    <Head>
                        <ButtonBack>
                            <MaterialIcons name="keyboard-arrow-left" size={RFValue(40)} color={theme.colors.shape} onPress={() => Navigation.goBack()} />
                        </ButtonBack>

                        <TitleTable>{dataClient.item.nameClient}</TitleTable>
                    </Head>

                    <TxtTotalValue>R$ {ordersOfClient.length == 0 ? '00,00' : totalValue}</TxtTotalValue>

                </Header>}



            {
                dataClient.item.nameClient != '' &&

                <Content>
                    <TxtItens>Itens da Comanda/Mesa</TxtItens>


                    {
                        ordersOfClient.length > 0 ?

                            <ListOrders
                                keyExtractor={item => String(item.id)}
                                data={ordersOfClient}
                                renderItem={({ item }) => (
                                    <CardOrder title={item.title} qtd={item.qtd} priceTotal={item.value} priceUd={item.priceUd} onpress={() => handleOpenOrder(item)} />
                                )}
                                showsVerticalScrollIndicator={false}
                                style={{ width: '100%' }}
                                overScrollMode={'never'}
                            />

                            :

                            <AreaTxtNotData>
                                <TxtNotData>Esta mesa ainda não possui nenhum pedido.</TxtNotData>
                            </AreaTxtNotData>

                    }


                    <Footer>
                        <BtnAdd>
                            <Ionicons name="add-circle" size={RFValue(58)} color={theme.colors.primary} onPress={() => handleAddNewOrder()} />
                        </BtnAdd>

                        <BtnCloseTable onPress={() => modalActivedCloseOrder.current?.open()}>
                            <TxtCloseTable>Fechar conta</TxtCloseTable>
                        </BtnCloseTable>
                    </Footer>

                </Content>}



            {
                showCardNewClient &&

                <ContainerCard>
                    <Card>
                        <TxtNewClient>Jeferson, como deseja chamar esta mesa?</TxtNewClient>

                        <InputNameClient style={{ fontFamily: theme.fonts.regular, fontSize: 16 }} onChangeText={text => setNameClient(text)} />

                        <ButtonContinue onPress={() => handleSubmitName()}>
                            <TxtContinue>Continuar</TxtContinue>
                        </ButtonContinue>
                    </Card>
                </ContainerCard>}


            <Modalize ref={modalActived} scrollViewProps={{ showsVerticalScrollIndicator: false, overScrollMode: 'never' }} modalHeight={RFPercentage(85)} modalStyle={{ backgroundColor: theme.colors.background, paddingHorizontal: 25, paddingTop: '10%' }}>

                <AreaSearch>

                    <SearchTables placeholder="Busque pelo nome do produto" autoCapitalize='characters' onChangeText={(text) => handleChangeSearchItem(text)} style={{ fontFamily: theme.fonts.regular, fontSize: RFValue(13) }} />

                    <AreaButtonSearch>
                        <Ionicons name="search" size={RFValue(23)} color={theme.colors.text} />
                    </AreaButtonSearch>

                </AreaSearch>

                <FlatList
                    keyExtractor={item => String(item.titleCategory)}
                    data={[{ id: 'id', titleCategory: 'Todos' }, ...categories]}
                    renderItem={({ item }) => (
                        <PickerCategoryItem title={item.titleCategory} actived={item.titleCategory == pickerCatogorySelected} onpress={() => handlePickerCategorySelected(item)} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                {
                    allItems.length == 0

                    &&

                    <AreaNotDataItems>
                        <TxtNotDataItems>Jeferson, seu cardápio ainda está vazio, adicione novos produtos 😉</TxtNotDataItems>
                    </AreaNotDataItems>
                }

                {
                    <View style={{ marginTop: RFValue(40) }}>
                        {allItems.map(item => (
                            <CardItem key={item.id} title={item.title} value={item.value} onpress={() => handleOpenOrderByMenu(item)} />
                        ))}
                    </View>
                }

            </Modalize>



            <Modalize ref={modalActivedCloseOrder} scrollViewProps={{ showsVerticalScrollIndicator: false, overScrollMode: 'never' }} modalHeight={RFPercentage(70)} modalStyle={{ backgroundColor: theme.colors.background, paddingHorizontal: 25, paddingTop: '10%' }}>

                <HeaderModalClose>
                    <TxtClient>Total da mesa:</TxtClient>
                    <TXtValueClient>R$ {totalValue}</TXtValueClient>
                </HeaderModalClose>

                <TxtShare>Jeferson, deseja dividir essa conta em quantas pessoas?</TxtShare>

                <Actions>
                    <Ionicons name="remove-circle" size={RFValue(35)} color={theme.colors.primary} onPress={() => subQtdItem()} />
                    <TxtQtd>{qtdItem}</TxtQtd>
                    <Ionicons name="add-circle" size={RFValue(35)} color={theme.colors.primary} onPress={() => addQtdItem()} />
                </Actions>

                {qtdItem > 1 && <TxtSubTotal>R$ {valueShared.toFixed(2)}</TxtSubTotal>}

                <BtnCloseAll onPress={() => closeTable()}>
                    <TxtCloseAll>Fechar</TxtCloseAll>
                </BtnCloseAll>

            </Modalize>

        </Container>
    );
}