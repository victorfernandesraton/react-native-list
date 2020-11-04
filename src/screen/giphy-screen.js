import React from 'react';
import { StyleSheet, View } from 'react-native';
import TopBarView from '../components/topbar/TopBarView-container';
import GiphyView from '../components/giphy/GiphyView-container';

export default function Index(props) {
	return (
		<View style={styles.container}>
			<TopBarView {...props} title="Giphy" />
			<GiphyView />
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
