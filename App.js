import React from 'react';

import { Routes } from './src/routes';

import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_700Bold, Inter_500Medium, useFonts } from '@expo-google-fonts/inter';

export default function App() {

  const [fontsValided] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })

  if (!fontsValided) return <AppLoading />

  return (
    <Routes />
  );
}