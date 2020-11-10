import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import GiphyButtonType from './GiphyButtonType';

/**
 *
 * @param {{changeText: BlobCallback, query: string, type: string, typeList: Array<{value: string, label: string}>}}
 */
export default function GiphySearchTextBar({
	changeText,
	handleType,
	query,
	type,
	typeList = [],
}) {
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
				<>
					<View
						style={{ display: 'flex', flexDirection: 'row', marginRight: 8 }}
					>
						{typeList.map((e, k) => (
							<GiphyButtonType
								disabled={e.value === type}
								title={e.label}
								key={k}
								onPress={handleType}
							/>
						))}
					</View>
					<TouchableOpacity
						onPress={() => changeText('')}
						style={styles.closeButton}
					>
						<Text style={styles.closeButtonText}>{'X'}</Text>
					</TouchableOpacity>
				</>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	textArea: {
		alignItems: 'center',
		backgroundColor: '#e7e7e7',
		borderRadius: 40,
		height: 56,
		flexDirection: 'row',
		marginHorizontal: 10,
		marginVertical: 16,
	},
	textInput: {
		alignSelf: 'center',
		flex: 1,
		fontSize: 16,
		height: 32,
		justifyContent: 'center',
		marginHorizontal: 16,
		marginVertical: 16,
	},
	closeButton: {
		alignItems: 'center',
		height: 32,
		justifyContent: 'center',
		marginLeft: 8,
		borderRadius: 100,
		borderColor: '#ff457a',
		borderWidth: 2,
		marginRight: 16,
		width: 32,
	},
	closeButtonText: {
		color: '#ff457a',
		fontSize: 8,
	},
});
