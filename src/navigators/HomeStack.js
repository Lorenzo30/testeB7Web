import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../pages/HomeScreen';
import Frases from '../pages/Frases';
import Recomendacoes from '../pages/Recomendacoes';
import ComoFunciona from '../pages/ComoFunciona';
import PreMotivacao from "../pages/PreMotivacao";

const MainStack = createNativeStackNavigator(); 

export default () => { 
  return (
    <MainStack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#284A66" }}}>
       <MainStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} /> 
    </MainStack.Navigator>
  );
}    