import React, { useCallback, useEffect, useReducer } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { initialState } from './Giphy-constants';

import { fetchGifs, fetchGifsPagination } from './Giphy-action';
import { calculePagination } from './Giphy-utils';

import Reducer from './Giphy-reducer';

const renderItem = ({ item }) => (
	<View style={{ height: 200, width: 800 }}>
		<Text>{`${item.title}`}</Text>
		<Image
			source={{ uri: item.images.fixed_height.url }}
			style={{
				height: 200,
				width: 300,
			}}
		/>
	</View>
);

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
					maxToRenderPerBatch={10}
					keyExtractor={(item) => item.id.toString()}
					renderItem={renderItem}
					onEndReached={pagination}
					onEndReachedThreshold={0.3}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		minHeight: 60,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default GiphyView;
