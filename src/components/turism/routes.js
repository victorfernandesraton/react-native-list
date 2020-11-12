import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TurismoList from '../../screen/turism-screen';
import TurismDetails from './More';

const StackContatos = createStackNavigator();
export default function Index() {
	return (
		<StackContatos.Navigator
			initialRouteName="turism-list"
			screenOptions={{
				headerShown: false,
			}}
		>
			<StackContatos.Screen name="turism-list" component={TurismoList} />
			<StackContatos.Screen
				name="turism-details"
				component={TurismDetails}
				options={{
					headerShown: true,
				}}
			/>
		</StackContatos.Navigator>
	);
}
