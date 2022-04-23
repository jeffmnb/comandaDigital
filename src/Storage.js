import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';



/*==============================================  BUSCA E ADICIONA CLIENTE ==============================================  */

export const getAllClients = async () => {
    const allClient = await AsyncStorage.getItem('clients2');

    let result = allClient ? JSON.parse(allClient) : [];

    const dataSorted = result.sort((a, b) => {

        let x = a.nameClient.toUpperCase();

        let y = b.nameClient.toUpperCase();

        return x == y ? 0 : x > y ? 1 : -1;
    });

    return dataSorted;

};


export const saveNewClient = async (client) => {

    let clientsStoraged = await getAllClients();

    clientsStoraged.push(client);

    await AsyncStorage.setItem('clients2', JSON.stringify(clientsStoraged));
};

export const deleteClient = async (idClient) => {
    let clientsStoraged = await getAllClients();

    let myClients = clientsStoraged.filter((client) => {
        return client.id !== idClient.item.id;
    });

    await AsyncStorage.setItem('clients2', JSON.stringify(myClients));
};




/*==============================================  BUSCA E ADICIONA PEDIDO PARA CLIENTE ==============================================  */


export const getAllOrders = async (idClient) => {
    const allOrders = await AsyncStorage.getItem(idClient);

    let result = allOrders ? JSON.parse(allOrders) : [];

    const dataSorted = result.sort((a, b) => {

        let x = a.title.toUpperCase();

        let y = b.title.toUpperCase();

        return x == y ? 0 : x > y ? 1 : -1;
    });

    return dataSorted;



    return result;
};


export const addNewOrder = async (idClient, order) => {

    await AsyncStorage.setItem(idClient, JSON.stringify(order));
};



export const editOrder = async (idClient, order) => {

    let allOrders = await getAllOrders(idClient);

    // console.log(allOrders);

    const teste = allOrders.filter(item => {
        return item.id != order.id;
    });

    // console.log(teste);

    const newData = [...teste, order];

    const dataSorted = newData.sort((a, b) => {

        let x = a.title.toUpperCase();

        let y = b.title.toUpperCase();

        return x == y ? 0 : x > y ? 1 : -1;
    })

    console.log(dataSorted);

    await addNewOrder(idClient, dataSorted);
};


export const cancelItemForClient = async (IdClient, order) => {

    let data = await getAllOrders(IdClient); //todos os pedidos deste cliente;

    const result = data.filter(orders => {
        return orders.id !== order.id;
    });

    console.log(result);

    await addNewOrder(IdClient, result);
};

/*============================================== BUSCA, CADASTRO E EDIÇÃO DE ITEMS =============================================  */

export const getAllItems = async () => {

    const allItems = await AsyncStorage.getItem('items7');

    let result = allItems ? JSON.parse(allItems) : [];

    const dataSorted = result.sort((a, b) => {

        let x = a.title.toUpperCase();

        let y = b.title.toUpperCase();

        return x == y ? 0 : x > y ? 1 : -1;
    });

    // console.log(result);

    return dataSorted;
};



export const createItem = async (item) => {

    let allItemsStoraged = await getAllItems();

    const hasItem = allItemsStoraged.some(itemMenu => itemMenu.title == item.title);

    if (hasItem) {
        return Alert.alert('', 'Este item já consta em seu cardápio.');
    }

    allItemsStoraged.push(item);

    await AsyncStorage.setItem('items7', JSON.stringify(allItemsStoraged));


    Alert.alert('', 'Item adicionado com sucesso!');
};


export const editItem = async (itemSelected) => {
    let data = await getAllItems();

    let result = data.filter(item => item.title != itemSelected.title);
    result.push(itemSelected);

    AsyncStorage.setItem('items7', JSON.stringify(result));

    Alert.alert('', 'Item Editado com sucesso!');
};

