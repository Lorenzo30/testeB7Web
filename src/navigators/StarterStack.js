
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StarterIntro from '../pages/StarterIntro';
import StarterName from '../pages/StarterName';
import StarterDias from "../pages/StarterDias";
import StarterNivel from "../pages/StarterNivel";
const StarterStack = createNativeStackNavigator(); 

export default () => { 
  return (
     <StarterStack.Navigator>
       <StarterStack.Screen name="Intro" component={StarterIntro} headerShown={false} options={{headerShown:false}} /> 
       <StarterStack.Screen name="StarterName" component={StarterName}  /> 
       <StarterStack.Screen name="StarterDias" component={StarterDias}  /> 
       <StarterStack.Screen name="StarterNivel" component={StarterNivel}  /> 
    </StarterStack.Navigator>
  );
}  
  