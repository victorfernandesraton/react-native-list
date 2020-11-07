import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
const styled = StyleSheet.create({
	container: {
		flex: 0,
		padding: 8,
		alignItems: 'center',
		display: 'flex',
		borderWidth: 2,
		borderRadius: 3,
	},
	deactive: {
		backgroundColor: '#fafafa',
		color: '#6157ff',
		borderColor: '#6157ff',
	},
	actived: {
		backgroundColor: '#6157ff',
		color: '#fafafa',
		borderColor: '#fafafa',
	},
});
export default function GiphyButtonType({ title, disabled, onPress }) {
	const styledColor = disabled ? styled.deactive : styled.actived;
	return (
		<TouchableHighlight onPress={onPress} disabled={disabled}>
			<View style={{...styled.container, ...styledColor}}>
				<Text style={{...styledColor}}>{title.toUpperCase()}</Text>
			</View>
		</TouchableHighlight>
	);
}
