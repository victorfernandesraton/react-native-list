import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GiphySingleScreen from '../../screen/single-giphy-screen'
import GiphyScreen from '../../screen/giphy-list'

const StackGiphy = createStackNavigator();
export default function Index() {
	return (
		<StackGiphy.Navigator
			initialRouteName="giphy-list"
			screenOptions={{
				headerShown: false,
			}}
		>
			<StackGiphy.Screen name="giphy-list" component={GiphyScreen} />
			<StackGiphy.Screen
				name="giphy-single"
				component={GiphySingleScreen}
				options={{
					headerShown: true,
				}}
			/>
		</StackGiphy.Navigator>
	);
}