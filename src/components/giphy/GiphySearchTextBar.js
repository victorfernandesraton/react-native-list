import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

const styles = StyleSheet.create({
	textArea: {
		alignItems: 'center',
		backgroundColor: '#f3f3f3',
		borderRadius: 40,
		flexDirection: 'row',
		marginHorizontal: 10,
	},
	textInput: {
		alignSelf: 'center',
		backgroundColor: '#f3f3f3',
		flex: 1,
		fontSize: 16,
		height: 24,
		justifyContent: 'center',
		marginHorizontal: 16,
		marginVertical: 16
	},
	closeButton: {
		alignItems: 'center',
		height: 24,
		justifyContent: 'center',
		margin: 16,
		width: 16,
	},
});
const GiphySearchTextBar = ({ query, changeText }) => {
	return (
		<View style={styles.textArea}>
			<TextInput
				clearButtonMode="always"
				onChangeText={changeText}
				placeholder="digite algo para buscar"
				style={styles.textInput}
				value={query}
			/>
			{query !== '' && (
				<TouchableOpacity
					onPress={() => changeText('')}
					style={styles.closeButton}
				>
					<Text>{'X'}</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default GiphySearchTextBar;
