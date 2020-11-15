import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import { DrawerItens } from './Drawer-constants';

export default function DrawerView() {
	return (
		<Drawer.Navigator initialRouteName="giphy-routes" openByDefault={false}>
			{DrawerItens.map((item, key) => {
				return (
					<Drawer.Screen
						name={item.name}
						component={item.component}
						options={{
							title: item.title,
							drawerLabel: item.title,
							headerShown: false,
						}}
						key={key}
					/>
				);
			})}
		</Drawer.Navigator>
	);
}
