import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, FlatList, KeyboardAvoidingView, StatusBar, TouchableOpacity, View } from 'react-native';
import theme from '../../styles/theme';

import {
    Container,
    Header,
    AreaWelcome,
    Greeting,
    TxtDate,
    MessageForUser,
    Content,
    SearchTables,
    AreaSearch,
    AreaButtonSearch,
    TxtTables,
    ListTables,
    Top,
    BtnCreate,
    TxtCreate,
    BtnEdit,
    TxtEdit,
    AreaButons,
    TxtCategory,
    Form,
    TxtInputTitle,
    TextInputTitle,
    TxtInputValue,
    TextInputValue,
    BtnSend,
    TxtSend,
    AreaNotDataItems,
    TxtNotDataItems
} from './styles';

import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { CardTable } from '../../components/CardTable';
import NUMTABLES from '../../utils/numTables';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import { createItem, editItem, getAllClients, getAllItems } from '../../Storage';
import { Modalize } from 'react-native-modalize';
import categories from '../../utils/categories';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { PickerCategoryItem } from '../../components/PickerCategoryItem';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { CardItem } from '../../components/CardItem';

export const Main = () => {

    const [clients, setClients] = useState([]);

    const [pickerCatogorySelected, setPickerCatogorySelected] = useState('');

    const [titleItem, setTitleItem] = useState('');

    const [valueItem, setValueItem] = useState('');

    const [inputSearchTable, setInputSearchTable] = useState('');

    const Navigation = useNavigation();

    const modalActived = useRef(false);

    const modalCreateActived = useRef(false);

    const modalEditItem = useRef(false);

    const modalEditActived = useRef(false);

    const [timeNow, setTimeNow] = useState(new Date().getHours());

    const [allItems, setAllItems] = useState([]);

    const [itemSelectedToEdit, setItemSelectedToEdit] = useState([]);

    const [inputSearchItem, setInputSearchItem] = useState('');

    useFocusEffect(useCallback(() => {
        getingAllClients();
        getAllItemsOfMenu();
    }, []));

    const getingAllClients = async () => {
        const dataClients = await getAllClients();

        // console.log(dataClients);

        setClients(dataClients);

    };

    const getAllItemsOfMenu = async () => {
        const data = await getAllItems();

        setAllItems(data);
    };

    const handleClickButton = (item) => {

        if (item.id == 0) {
            Alert.alert('Adição de mesa', 'Deseja criar uma nova mesa?', [

                {
                    text: 'Não',
                    style: 'cancel'
                },

                {
                    text: 'Sim',
                    onPress: () => {

                        const newTable = {
                            id: String(uuid.v4()),
                            nameClient: '',
                            orders: [],
                            valueTotal: '00,00',
                        };

                        setClients(oldValue => [...oldValue, newTable]);

                    }
                }
            ])
        } else {
            handleOpenClient(item);
        }
    };

    const handleOpenClient = (item) => {
        Navigation.navigate('ClientOrders', { item });
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

    const handleAddItem = () => {
        modalCreateActived.current?.open();
    };

    const handleAddMenu = async () => {

        if (pickerCatogorySelected == '' || titleItem == '' || titleItem == ' ' || valueItem == '' || valueItem == ' ') {
            return Alert.alert('heey', 'Preencha todos os campos por favor!')
        };

        let item = {
            id: String(uuid.v4()),
            title: titleItem,
            value: valueItem,
            categoryItem: pickerCatogorySelected,
            priceUd: valueItem,
            qtd: '1',
            obs: ''
        };

        try {
            await createItem(item);
            modalCreateActived.current?.close();
            modalActived.current?.close();
        } catch (error) {
            console.log(error);
        }

    };

    const handleEditMenu = async () => {
        const itemSelected = itemSelectedToEdit;

        let item = {
            id: String(uuid.v4()),
            title: titleItem == '' ? itemSelectedToEdit.title : titleItem,
            value: valueItem == '' ? itemSelectedToEdit.value : valueItem,
            categoryItem: pickerCatogorySelected,
            priceUd: valueItem == '' ? itemSelectedToEdit.value : valueItem,
            qtd: '1',
            obs: ''
        };

        try {

            if (pickerCatogorySelected == '') {
                return Alert.alert('heey', 'Preencha todos os campos por favor!')
            }

            await editItem(item);

            modalEditItem.current?.close();
            modalActived.current?.close();
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeInput = async (text) => {
        setInputSearchTable(text);

        let allTables = await getAllClients();

        const result = allTables.filter(item => item.nameClient.match(text));

        setClients(result);
    };

    const handleEditItem = () => {
        modalEditActived.current?.open();
    };

    const handleOpenitemEdit = (item) => {
        modalEditItem.current?.open();
        modalEditActived.current.close();
        setPickerCatogorySelected('');

        setItemSelectedToEdit(item);
    };

    const handleChangeSearchItem = async (text) => {
        setInputSearchItem(text);

        let allItems = await getAllItems();

        const result = allItems.filter(itemStoraged => itemStoraged.title.match(text));

        setAllItems(result);
    };

    return (
        <Container>

            <StatusBar backgroundColor={theme.colors.primary} barStyle='light-content' />

            <Header>
                <Top>
                    <AreaWelcome>
                        <Greeting>Olá, Jeferson</Greeting>
                        <MessageForUser>{(timeNow > 3 && timeNow <= 11) ? 'Bom dia, boas vendas!' : (timeNow > 11 && timeNow <= 18) ? 'Boa tarde, boas vendas!' : 'Boa noite, boas vendas!'}</MessageForUser>
                    </AreaWelcome>

                    <TouchableOpacity>
                        <FontAwesome name="gear" size={24} color={theme.colors.shape} onPress={() => modalActived.current?.open()} />
                    </TouchableOpacity>
                </Top>

                <TxtDate>{format(new Date(), 'cccc', { locale: ptBR }) + format(new Date(), ', dd/MM/yyyy')}</TxtDate>
            </Header>

            <Content>

                <AreaSearch>

                    <SearchTables placeholder="Digite o nome do cliente/comanda" onChangeText={(text) => handleChangeInput(text)} style={{ fontFamily: theme.fonts.regular, fontSize: 15 }} />

                    <AreaButtonSearch>
                        <Ionicons name="search" size={RFValue(23)} color={theme.colors.text} />
                    </AreaButtonSearch>

                </AreaSearch>

                <TxtTables>Mesas</TxtTables>

                <ListTables
                    keyExtractor={item => String(item.id)}
                    data={[{ id: 0, nameClient: 'Adicionar' }, ...clients]}
                    renderItem={({ item }) => (
                        <CardTable name={item.nameClient} price={item.valueTotal} onpress={() => handleClickButton(item)} />
                    )}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    style={{ marginLeft: widthPercentageToDP('14%') }}
                />

            </Content>



            <Modalize ref={modalActived} modalHeight={RFPercentage(30)} modalStyle={{ backgroundColor: theme.colors.background, paddingHorizontal: 25, paddingTop: '10%' }}>

                <AreaButons>
                    <BtnCreate onPress={() => handleAddItem()}>
                        <TxtCreate>Adicionar Produto</TxtCreate>
                    </BtnCreate>

                    <BtnEdit onPress={() => handleEditItem()}>
                        <TxtEdit>Editar Produto</TxtEdit>
                    </BtnEdit>
                </AreaButons>

            </Modalize>


            <Modalize ref={modalCreateActived} scrollViewProps={{ showsVerticalScrollIndicator: false }} modalHeight={RFPercentage(80)} modalStyle={{ backgroundColor: theme.colors.background, paddingHorizontal: 25, paddingTop: '10%' }}>

                <TxtCategory>Jeferson, a qual categoria o item pertence?</TxtCategory>

                <FlatList
                    keyExtractor={item => String(item.titleCategory)}
                    data={categories}
                    renderItem={({ item }) => (
                        <PickerCategoryItem title={item.titleCategory} actived={item.titleCategory == pickerCatogorySelected} onpress={() => handlePickerCategorySelected(item)} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ flex: 1 }}
                />

                <Form>
                    <TxtInputTitle>Nome do item:</TxtInputTitle>
                    <TextInputTitle placeholder='ESPETO DE CARNE' autoCorrect={false} autoCapitalize={"characters"} placeholderTextColor={theme.colors.text} onChangeText={text => setTitleItem(text)} />

                    <TxtInputValue>Preço:</TxtInputValue>
                    <TextInputValue placeholder='6.00' placeholderTextColor={theme.colors.text} keyboardType={'ascii-capable'} onChangeText={text => setValueItem(text)} />

                    <BtnSend onPress={() => handleAddMenu()}>
                        <TxtSend>Adicionar</TxtSend>
                    </BtnSend>
                </Form>

            </Modalize>


            <Modalize ref={modalEditActived} scrollViewProps={{ showsVerticalScrollIndicator: false, overScrollMode: 'never' }} modalHeight={RFPercentage(85)} modalStyle={{ backgroundColor: theme.colors.background, paddingHorizontal: 25, paddingTop: '10%' }}>

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
                            <CardItem key={item.id} title={item.title} value={item.value} onpress={() => handleOpenitemEdit(item)} />
                        ))}
                    </View>
                }

            </Modalize>


            <Modalize ref={modalEditItem} scrollViewProps={{ showsVerticalScrollIndicator: false }} modalHeight={RFPercentage(80)} modalStyle={{ backgroundColor: theme.colors.background, paddingHorizontal: 25, paddingTop: '10%' }}>
                <TxtCategory>Jeferson, a qual categoria o item pertence?</TxtCategory>

                <FlatList
                    keyExtractor={item => String(item.titleCategory)}
                    data={categories}
                    renderItem={({ item }) => (
                        <PickerCategoryItem title={item.titleCategory} actived={item.titleCategory == pickerCatogorySelected} onpress={() => handlePickerCategorySelected(item)} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ flex: 1 }}
                />

                <Form>
                    <TxtInputTitle>Nome do item:</TxtInputTitle>
                    <TextInputTitle defaultValue={itemSelectedToEdit.title} placeholder='ESPETO DE CARNE' autoCorrect={false} autoCapitalize={"characters"} placeholderTextColor={theme.colors.text} onChangeText={text => setTitleItem(text)} />

                    <TxtInputValue>Preço:</TxtInputValue>
                    <TextInputValue defaultValue={itemSelectedToEdit.priceUd} placeholder='6.00' placeholderTextColor={theme.colors.text} keyboardType={'ascii-capable'} onChangeText={text => setValueItem(text)} />

                    <BtnSend onPress={() => handleEditMenu()}>
                        <TxtSend>Editar</TxtSend>
                    </BtnSend>
                </Form>
            </Modalize>

        </Container>
    );
}