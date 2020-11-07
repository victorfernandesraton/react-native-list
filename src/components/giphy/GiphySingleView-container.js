import React from 'react';
import { View, Text, Button, Share } from 'react-native';

import GiphyItem from './GiphyItem';

/**
 * @param {{item: {id: string, type: string}}} param0
 */
const GiphySingleView = ({ item }) => {
	const HandleShare = async (item) => {
		try {
			const result = await Share.share({
				url: item.images.original.webp,
				title: 'gif',
				message: item.images.original.webp,
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
					HandleShare(item);
				}}
				title="Teste"
			/>
			<Text>{item.slug}</Text>
		</View>
	);
};

export default GiphySingleView;
