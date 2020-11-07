import React, { useReducer } from 'react';
import { View, Text, Button, Share } from 'react-native';

import GiphyItem from './GiphyItem';
import { shareSingleImage } from './Giphy-action';
import { initialState } from './Giphy-constants';
import Reducer from './Giphy-reducer';

/**
 * @param {{item: {id: string, type: string}}} param0
 */
const GiphySingleView = ({ item }) => {
	const [{ loading, error }, dispatch] = useReducer(Reducer, initialState);

	return (
		
		<View style={{ display: 'flex' }}>
			<View style={{ alignItems: 'center' }}>
				<GiphyItem
					style={{ item: { flex: 0 } }}
					disabled
					key={item.slug}
					item={item}
					type="fixed_height"
				/>
			</View>
			<Button
				onPress={() => {
					shareSingleImage(dispatch, Share, { item });
				}}
				title="Compartilhar"
			/>
			<Text>{item.slug}</Text>
		</View>
	);
};

export default GiphySingleView;
