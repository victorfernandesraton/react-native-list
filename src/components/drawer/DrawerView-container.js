import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SpotfyScreen from '../../screen/spotfy-screen';
const Drawer = createDrawerNavigator();
function DrawerView() {
  return (
    <Drawer.Navigator iniinitialRouteNametial="spotfy-app">
      <Drawer.Screen name="spotfy-app" component={SpotfyScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerView;
