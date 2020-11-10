import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { extractGiphyData } from './Giphy-utils';
import GiphyPlaceholder from './GiphyPlaceholder';

export default function GiphyItem({ item, type = 'fixed_width', style, disabled = false }) {
	const { width, height, url } = extractGiphyData({ item, type });
	const navigation = useNavigation();
	const [loading, setLoading] = useState(false);

	return (
		<TouchableOpacity
			disabled={disabled}
			style={{ ...styled.item, height, width, flex: style?.item?.flex }}
			onPress={() => {
				navigation.navigate('giphy-single', {
					id: item.id,
				});
			}}
		>
			{!loading && <GiphyPlaceholder />}
			<Image
				key={item.id}
				source={{ uri: url }}
				style={{ ...styled.item, height, width, flex: style?.item?.flex }}
				resizeMode="cover"
				onLoadEnd={() => {
					setLoading(true);
				}}
			/>
		</TouchableOpacity>
	);
};

const styled = StyleSheet.create({
	item: {
		aspectRatio: 1,
	},
});