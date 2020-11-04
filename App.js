import React from 'react';
import {StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Drawer from './src/components/drawer/DrawerView-container';
export default function App() {
  return (
    <NavigationContainer>
			<StatusBar />
      <Drawer />
    </NavigationContainer>
  );
}
