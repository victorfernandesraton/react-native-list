import React, { useEffect, useReducer } from 'react';
import { View, Text, Image, Share, Button } from 'react-native';

import { fetcgGifById, fetchGifs, fetchGifsPagination } from './Giphy-action';
import { calculePagination, extractGiphyData } from './Giphy-utils';

import { initialState } from './Giphy-constants';

import Reducer from './Giphy-reducer';
import GiphyItem from './GiphyItem';

/**
 *
 * @param {{item: {id: string, type: string}}} param0
 */
const GiphySingle = ({ item }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	const { loading, called, items, error, metadata } = state;

	useEffect(() => {
		fetcgGifById(dispatch, { id: item.id, type: item.type });
	}, [item]);

	const HandleShare = async (item) => {
		try {
			const result = await Share.share({
				url: item.images.original.mp4,
				title: 'gif',
				message:
					'React Native | A framework for building native apps using React',
			});
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// shared with activity type of result.activityType
				} else {
					// shared
				}
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<View style={{ display: 'flex' }}>
			{!loading &&
				called &&
				items.map((el) => {
					return (
						<>
							<View style={{ alignItems: 'center' }}>
								<GiphyItem
									style={{ item: { flex: 0 } }}
									disabled
									key={el.slug}
									item={el}
									type="fixed_height"
								/>
							</View>
							<Button
								onPress={() => {
									HandleShare(el);
								}}
								title="Teste"
							/>
							<Text>{el.slug}</Text>
						</>
					);
				})}
		</View>
	);
};

export default GiphySingle;
