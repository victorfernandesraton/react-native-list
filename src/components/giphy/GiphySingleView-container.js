import React, { useCallback, useEffect, useReducer } from 'react';
import { View, Text, Button, Share } from 'react-native';

import GiphyItem from './GiphyItem';
import { shareSingleImage, changeShareUrl } from './Giphy-action';
import { initialState, buttonShare } from './Giphy-constants';
import Reducer from './Giphy-reducer';
import GiphyButtonType from './GiphyButtonType';

/**
 * @param {{item: {id: string, type: string}}} param0
 */
const GiphySingleView = ({ item }) => {
	const [{ share }, dispatch] = useReducer(Reducer, initialState);
	
	const changeUrl = useCallback((type) => {
			changeShareUrl(dispatch, { item, type });
		},
		[share, item]
	);

	useEffect(() => {
		changeUrl('small')
	}, []);

	return (
		<View>
			<View style={{ alignItems: 'center' }}>
				<GiphyItem
					style={{ item: { flex: 0 } }}
					disabled
					key={item.slug}
					item={item}
					type="original"
				/>
			</View>
			<Button
				onPress={() => {
					shareSingleImage(dispatch, Share, { url: share.url });
				}}
				title="Compartilhar"
			/>
			<View style={{ display: 'flex', flexDirection: 'row' }}>
				{buttonShare.map((e, k) => (
					<GiphyButtonType
						disabled={share.type === e.value}
						title={e.title}
						key={k}
						onPress={() => changeUrl(e.value)}
					/>
				))}
			</View>
			<Text>{share.url}</Text>
		</View>
	);
};

export default GiphySingleView;
