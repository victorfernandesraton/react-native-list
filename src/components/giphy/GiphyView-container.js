import React, { useCallback, useEffect, useReducer } from 'react';

import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import {
	changeQuery,
	changeType,
	fetchGifs,
	fetchGifsPagination,
} from './Giphy-action';
import { buttonType, initialState } from './Giphy-constants';
import { calculePagination } from './Giphy-utils';
import Reducer from './Giphy-reducer';

import GiphyItem from './GiphyItem';
import GiphySearchTextBar from './GiphySearchTextBar';
import GiphyPlaceholder from './GiphyPlaceholder';

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
	const [state, dispatch] = useReducer(Reducer, {...initialState, query: 'Donald Trump'});
	const { loading, called, query, items, error, metadata, type } = state;

	useEffect(() => {
		if (!loading) {
			fetchGifs(dispatch, { q: query, type, limit: 12 });
		}
	}, [props, query, type]);

	const pagination = useCallback(() => {
		if (metadata.total > items.length && !loading) {
			fetchGifsPagination(dispatch, {
				q: query,
				type,
				limit: 12,
				...calculePagination({ ...metadata }),
			});
		}
	}, [props, metadata, type, loading]);

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
			<GiphySearchTextBar
				query={query}
				changeText={changeText}
				typeList={buttonType}
				type={type}
				handleType={handleType}
			/>
			<View
				style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
			></View>
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
								type="preview_gif"
							/>
						)}
						onEndReached={pagination}
						onEndReachedThreshold={0.3}
					/>
				</View>
			)}
			{loading && called && (
				<View style={{ flexDirection: 'row', display: 'flex', height: 120 }}>
					{[1, 2, 3].map((i) => {
						return <GiphyPlaceholder key={i} height={120} width={120} />;
					})}
				</View>
			)}
		</>
	);
}

export default GiphyView;
