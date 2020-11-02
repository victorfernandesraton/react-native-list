import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import HanburgerButton from './HanburgerButton';
function TopBarView(props) {
	return (
		<View
			style={{
				...styles.container,
				backgroundColor: props.backgroundColor || 'yellow',
			}}
		>
			<HanburgerButton {...props} />
			{props.title && <Text style={styles.title}>{props.title}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		height: 52,
		flexDirection: 'row', // row
		alignItems: 'center',
		justifyContent: 'center', // center, space-around
		paddingLeft: 10,
		paddingRight: 10,
	},
	title: {
		fontSize: 24,
	}
});

export default TopBarView;
