import React, { useCallback, useEffect, useReducer } from 'react';

import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import {
	changeQuery,
	changeType,
	fetchGifs,
	fetchGifsPagination,
} from './Giphy-action';
import { initialState } from './Giphy-constants';
import { calculePagination } from './Giphy-utils';
import Reducer from './Giphy-reducer';

import GiphyButtonType from './GiphyButtonType';
import GiphyItem from './GiphyItem';
import GiphySearchTextBar from './GiphySearchTextBar';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
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
			<GiphySearchTextBar query={query} changeText={changeText} />
			<View
				style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
			>
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
						maxToRenderPerBatch={20}
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
