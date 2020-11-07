import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const styled = StyleSheet.create({
	actived: {
		backgroundColor: '#6157ff',
		color: '#fafafa',
		flex: 1,
		display: 'flex',
		borderColor: '#fafafa'
	},
	deactive: {
		backgroundColor: '#fafafa',
		flex: 1,
		display: 'flex',
		color: '#6157ff',
		borderEndColor: '#6157ff',
		borderWidth: 1,
	},
});
export default function GiphyButtonType({ title, disabled, onPress }) {
	const { color, backgroundColor } = disabled
		? styled.deactive
		: styled.actived;
	return (
		<Button
			color={backgroundColor}
			// disabled={disabled}
			onPress={onPress}
			title={title}
		/>
	);
}
