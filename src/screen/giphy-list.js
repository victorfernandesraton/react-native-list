import React from 'react';
import { StyleSheet, View } from 'react-native';

import TopBarView from '../components/topbar/TopBarView-container';
import GiphyView from '../components/giphy/GiphyView-container';

export default function GiphyList(props) {
	return (
		<View style={styles.container}>
			<TopBarView
				{...props}
				title="GIPHY"
				buttonColor={'#fafafa'}
				backgroundColor="#121212"
				titleStyle={{ color: '#fafafa' }}
			/>
			<GiphyView {...props} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		backgroundColor: '#0e0e0e',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
