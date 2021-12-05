import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './src/store';


import MainStack from './src/navigators/MainStack';


export default () => (
  <NavigationContainer>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainStack />
    </PersistGate>
  </Provider>
  </NavigationContainer>
)