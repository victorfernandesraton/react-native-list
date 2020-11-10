import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const GiphyPlaceholder = ({ width = '100%', height = '100%' }) => {
	return (
		<View style={{ ...styled.fallback, height, width }}>
			<ActivityIndicator
				color="#FEEA5B"
				size="large"
				style={{
					alignSelf: 'center',
				}}
			/>
		</View>
	);
};

const styled = StyleSheet.create({
	fallback: {
		backgroundColor: '#20232A',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default GiphyPlaceholder;
