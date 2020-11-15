import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const More = (props) => {
	const { route } = props;

	const { item } = route.params;

	return (
		<View>
			<Text style={styles.productTitle}>{item.name}</Text>

			<Text style={styles.productDescription}>{item.description}</Text>

			<Text style={styles.productCreated}>{item.createAt}</Text>

			<Text style={styles.productUrl}>{item.url}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	productTitle: {
		backgroundColor: '#808080',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 30,
	},

	productDescription: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},

	productCreated: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},

	productUrl: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
});

export default More;
