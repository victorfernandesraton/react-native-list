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
		borderColor: 'gray',
		borderRadius: 5,
		borderWidth: 1,
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 10,
	},
	textInput: {
		alignSelf: 'center',
		backgroundColor: '#f3f3f3',
		flex: 1,
		fontSize: 16,
		height: 20,
		justifyContent: 'center',
		marginHorizontal: 10,
		marginVertical: 16,
		width: '90%',
	},
	closeButton: {
		alignItems: 'center',
		height: 16,
		justifyContent: 'center',
		margin: 8,
		width: 24,
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
