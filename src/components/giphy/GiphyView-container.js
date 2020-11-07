import React, { useCallback, useEffect, useReducer } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	Button,
	View,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import GiphyItem from './GiphyItem';
import { initialState } from './Giphy-constants';

import {
	fetchGifs,
	fetchGifsPagination,
	changeQuery,
	changeType,
} from './Giphy-action';
import { calculePagination } from './Giphy-utils';

import Reducer from './Giphy-reducer';
import GiphyButtonType from './GiphyButtonType';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// minHeight: 60,
		flexDirection: 'row',
		// flexBasis: 100,
		// alignContent: 'space-around',
		// aspectRatio: 1,
		// flexWrap: 'wrap'
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	buttonType: {
		color: '#6157ff',
	},
	textInput: {
		flex: 0,
		height: 40,
		width: 320,
		alignSelf: 'center',
		paddingHorizontal: 3,
		marginVertical: 16,
		borderRadius: 40,
		justifyContent: 'center',
		backgroundColor: '#f3f3f3',
	},
	item: {
		flexBasis: 0,
	},
});

function GiphyView(props) {
	const [state, dispatch] = useReducer(Reducer, initialState);
	const { loading, called, query, items, error, metadata, type } = state;

	useEffect(() => {
		if (!loading) {
			fetchGifs(dispatch, { q: query, type });
		}
	}, [props, query, type]);

	const pagination = useCallback(() => {
		if (metadata.total > items.length) {
			fetchGifsPagination(dispatch, {
				q: query,
				type,
				...calculePagination({ ...metadata }),
			});
		}
	}, [props, metadata, type]);

	const changeText = useCallback(
		(query) => {
			changeQuery(dispatch, { query });
		},
		[dispatch]
	);

	const handleType = useCallback(() => {
		changeType(dispatch, { type });
	}, [dispatch, type]);

	return (
		<>
			{!called && <ActivityIndicator size="large" />}
			<TextInput
				style={styles.textInput}
				value={query}
				onChangeText={changeText}
			/>
			<View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap',alignContent: 'stretch' }}>
				{['gifs', 'stickers'].map((e, k) => (
					<GiphyButtonType
						disabled={e === type}
						title={e}
						key={k}
						onPress={handleType}
					/>
				))}
			</View>
			{called && !error && (
				<View style={styles.container}>
					<FlatList
						key={`${query}:${type}`}
						data={items}
						numColumns={3}
						maxToRenderPerBatch={10}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<GiphyItem
								style={{ item: { flex: 1 } }}
								item={item}
								type="downsized_medium"
							/>
						)}
						onEndReached={pagination}
						onEndReachedThreshold={0.3}
					/>
				</View>
			)}
			{loading && <ActivityIndicator size="large" />}
		</>
	);
}

export default GiphyView;
