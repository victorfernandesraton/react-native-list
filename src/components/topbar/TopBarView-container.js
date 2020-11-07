import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { color } from 'react-native-reanimated';

import HanburgerButton from './HanburgerButton';

/**
 * @param {{title: String, backgroundColor: Hex}} props 
 */
function TopBarView(props) {
	const {backgroundColor, titleStyle, buttonColor} = props;
	return (
		<View
			style={{
				...styles.container,
				backgroundColor: backgroundColor || 'yellow',
			}}
		>
			<HanburgerButton {...props} color={buttonColor} />
			{props.title && <Text style={{...styles.title, ...titleStyle}}>{props.title}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		height: 64,
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 2000 },
    shadowOpacity: 0,
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
