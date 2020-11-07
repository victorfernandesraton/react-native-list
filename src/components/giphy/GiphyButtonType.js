import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const styled = StyleSheet.create({
	container: {
		flex: 0,
		paddingHorizontal: 8,
		paddingVertical: 8,
		alignItems: 'center',
		display: 'flex',
		borderRadius: 3,
		zIndex: 30,
	},
	textStyle: {
		fontSize: 8,
	},
	deactive: {
		backgroundColor: '#fafafa',
		color: '#6157ff',
		borderColor: '#6157ff',
	},
	actived: {
		backgroundColor: '#6157ff',
		color: '#fafafa',
	},
});
export default function GiphyButtonType({ title, disabled, onPress }) {
	const styledColor = disabled ? styled.deactive : styled.actived;
	return (
		<TouchableOpacity onPress={onPress} disabled={disabled}>
			<View style={{ ...styled.container, ...styledColor }}>
				<Text style={{ ...styledColor, ...styled.textStyle }}>
					{title.toUpperCase()}
				</Text>
			</View>
		</TouchableOpacity>
	);
}
