import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import { DrawerItens } from './Drawer-constants';
function DrawerView() {
  return (
    <Drawer.Navigator
      iniinitialRouteNametial={
        DrawerItens.find((el) => el.default === true).name
      }
    >
      {DrawerItens.map((item, key) => {
        return (
          <Drawer.Screen
            name={item.name}
            component={item.component}
            options={{
              title: item.title,
              drawerLabel: item.title,
            }}
            key={key}
          />
        );
      })}
    </Drawer.Navigator>
  );
}

export default DrawerView;
