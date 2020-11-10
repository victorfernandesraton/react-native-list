import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HanburgerButton(props) {
	return (
		<Ionicons
			name="md-menu"
			color={props.color || '#000000'}
			size={32}
			style={styles.menuIcon}
			onPress={() => props.navigation.toggleDrawer()}
		/>
	);
}

const styles = StyleSheet.create({
	menuIcon: {
		zIndex: 9,
		position: 'absolute',
		left: 20,
	},
});
