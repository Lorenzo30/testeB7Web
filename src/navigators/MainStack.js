import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Preload from '../pages/Preload';
import StarterStack from './StarterStack';
import HomeScreen from "../pages/HomeScreen";
import AppTab from './AppTab';
import PreMotivacao from "../pages/PreMotivacao";
import ComoFunciona from "../pages/ComoFunciona";
import Frases from "../pages/Frases";
import Recomendacoes from "../pages/Recomendacoes";
  

const MainStack = createNativeStackNavigator(); 

export default () => { 
  return (
    <MainStack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#284A66" } }}>
       <MainStack.Screen name="PreLoad" component={Preload} options={{headerShown:false}} /> 
       <MainStack.Screen component={StarterStack} name="StarterStack" options={{headerShown:false}} />
       <MainStack.Screen component={AppTab} name="AppTab" options={{headerShown:false}} />
       <MainStack.Screen component={PreMotivacao} name="PreMotivacao" />
       <MainStack.Screen component={ComoFunciona} name="ComoFunciona" />
       <MainStack.Screen component={Frases} name="Frases" />
       <MainStack.Screen component={Recomendacoes} name="Recomendacoes" />
    </MainStack.Navigator>
  );
}     