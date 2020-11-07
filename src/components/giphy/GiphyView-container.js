import React, { useCallback, useEffect, useReducer } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import GiphyItem from './GiphyItem';
import { initialState } from './Giphy-constants';

import { fetchGifs, fetchGifsPagination, changeQuery } from './Giphy-action';
import { calculePagination } from './Giphy-utils';

import Reducer from './Giphy-reducer';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		minHeight: 60,
		flexDirection: 'row',
		// flexWrap: 'wrap'
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	item: {
		flexBasis: 0,
	},
});

function GiphyView(props) {
	const [state, dispatch] = useReducer(Reducer, initialState);
	const { loading, called, query, items, error, metadata } = state;

	useEffect(() => {
		if (!loading) {
			fetchGifs(dispatch, { q: query });
		}
	}, [props, query]);

	const pagination = useCallback(() => {
		if (metadata.total > items.length) {
			fetchGifsPagination(dispatch, {
				q: query,
				...calculePagination({ ...metadata }),
			});
		}
	}, [props, metadata]);

	const changeText = useCallback(
		(query) => {
			changeQuery(dispatch, { query });
		},
		[dispatch]
	);

	return (
		<>
			{!called && <ActivityIndicator />}
			{error && (
				<View>
					<Text>Error</Text>
				</View>
			)}
			<TextInput value={query} onChangeText={changeText} />
			{called && !error && (
				<View style={styles.container}>
					<FlatList
						key={items.length}
						data={items}
						numColumns={3}
						maxToRenderPerBatch={10}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<GiphyItem style={{ item: { flex: 1 } }} item={item} />
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
