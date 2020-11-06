import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TopBarView from '../components/topbar/TopBarView-container';
import GiphyView from '../components/giphy/GiphyView-container';

const StackGiphy = createStackNavigator();
export default function Index(props) {
	return (
		<StackGiphy.Navigator initialRouteName="giphy-list" screenOptions={{
			headerShown: false
		}}>
			<StackGiphy.Screen name="giphy-list" component={GiphyList} />
			<StackGiphy.Screen name="giphy-single" component={GiphySingle} />
		</StackGiphy.Navigator>
	);
}
export function GiphyList(props) {
	return (
		<View style={styles.container}>
			<TopBarView {...props} title="Giphy" />
			<GiphyView {...props} />
		</View>
	);
}
export function GiphySingle(props) {
	const { route, navigation } = props;
	console.log(props);
	const { id } = route.params;
	return (
		<View style={styles.container}>
			<TopBarView {...props} title="Giphy" />
			<Text>{id}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
