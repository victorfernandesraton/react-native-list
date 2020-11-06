import React, { useCallback, useEffect, useReducer } from 'react';
import { Image, StyleSheet, Text, View, FlatList, Button } from 'react-native';

import { initialState } from './Giphy-constants';

import { fetchGifs, fetchGifsPagination } from './Giphy-action';
import { calculePagination, extractGiphyData } from './Giphy-utils';

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
		flexBasis: 0	
	}
});

const RenderItem = ({ item, type='preview', navigation }) => {
	const {width, height, url} = extractGiphyData({item, type});
	const styled = StyleSheet.create({
		item: {
			height,
			width,
			aspectRatio: 1, 
			flex: 1
			// flexBasis: 0
		}
	})

	return (
		<View style={{ height, width }}>
			<Button onPress={() => {
				navigation.navigate('giphy-single', {
					id: item.id
				})
			}} title="teste"/>
				
				<Image
					source={{ uri: url }}
					style={styled.item}
				/>
		</View>
	);
};

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
					renderItem={({item}) => <RenderItem navigation={props.navigation} item={item} />}
					onEndReached={pagination}
					onEndReachedThreshold={0.3}
				/>
			)}
		</View>
	);
}


export default GiphyView;
