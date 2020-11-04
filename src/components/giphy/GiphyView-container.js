import React, { useEffect, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { initialState } from './Giphy-constants';
import { fetchGifs, fetchGifsPagination, nextPage } from './Giphy-action';

import Reducer from './Giphy-reducer';

const renderItem = ({ item }) => (
	<View style={{ height: 200, width: 800 }}>
		<Text>{`${item.title}`}</Text>
	</View>
);

function GiphyView(props) {
	const [state, dispatch] = useReducer(Reducer, initialState);
	const { loading, called, items, error } = state;

	useEffect(() => {
		if (!loading) {
			fetchGifs(dispatch, { q: 'cokie' });
		}
	}, [props]);

	if (loading && !called) {
		return (
			<View>
				<Text>Carrregando</Text>
			</View>
		);
	}
	return (
		<View style={styles.container}>
			{!called && !error && (
				<View>
					<Text>Carrregando</Text>
				</View>
			)}
			{error && (
				<View><Text>Error</Text></View>
			)}
			{called && !error && (
				<FlatList
					data={items}
					extraData={items}
					// maxToRenderPerBatch={3}
					keyExtractor={(item) => item.id.toString()}
					renderItem={renderItem}
					// onEndReached={pagination}
					onEndReachedThreshold={0.001}
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
