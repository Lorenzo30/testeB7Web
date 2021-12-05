import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';

import CustomTabBar from '../components/CustomTabBar';
import Frases from '../pages/Frases';


export default () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
          <Tab.Screen name="HomeStack" type="logo" component={HomeStack} options={{headerShown:false}} />
       </Tab.Navigator>
    )
}   