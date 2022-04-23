import React from 'react';

import { createStackNavigator, } from '@react-navigation/stack';

import { Main } from '../pages/Main';
import { ClientOrders } from '../pages/ClientOrders';
import { CreateOrder } from '../pages/CreateOrder';

export const StackRoutes = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='ClientOrders' component={ClientOrders} />
            <Stack.Screen name='CreateOrder' component={CreateOrder} />
        </Stack.Navigator>
    )
}