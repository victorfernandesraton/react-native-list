import React, { useCallback, useEffect, useReducer } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GiphyItem from './GiphyItem';
import { initialState } from './Giphy-constants';

import { fetchGifs, fetchGifsPagination } from './Giphy-action';
import { calculePagination } from './Giphy-utils';

import Reducer from './Giphy-reducer';

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
	const { loading, called, items, error, metadata } = state;

	useEffect(() => {
		if (!loading) {
			fetchGifs(dispatch, { q: 'cokie' });
		}
	}, [props]);

	const pagination = useCallback(() => {
		if (metadata.total > items.length) {
			fetchGifsPagination(dispatch, {
				q: 'cokie',
				...calculePagination({ ...metadata }),
			});
		}
	}, [props, metadata]);

	return (
		<View style={styles.container}>
			{!called && !error && (
				<View>
					<Text>Carrregando</Text>
				</View>
			)}
			{error && (
				<View>
					<Text>Error</Text>
				</View>
			)}
			{called && !error && (
				<FlatList
					data={items}
					extraData={items}
					numColumns={3}
					maxToRenderPerBatch={10}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<GiphyItem style={{ item: { flex: 1 } }} item={item} />
					)}
					onEndReached={pagination}
					onEndReachedThreshold={0.3}
				/>
			)}
		</View>
	);
}

export default GiphyView;
