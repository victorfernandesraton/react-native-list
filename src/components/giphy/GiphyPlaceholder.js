import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const styled = StyleSheet.create({
	fallback: {
		backgroundColor: '#20232A',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
const GiphyPlaceholder = () => {
	return (
		<View style={{ ...styled.fallback }}>
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

export default GiphyPlaceholder;
