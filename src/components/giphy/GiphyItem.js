import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { extractGiphyData } from './Giphy-utils';
import GiphyPlaceholder from './GiphyPlaceholder';

const GiphyItem = ({ item, type = 'fixed_width', style, disabled = false }) => {
	const { width, height, url } = extractGiphyData({ item, type });

	const styled = StyleSheet.create({
		item: {
			height,
			width,
			aspectRatio: 1,
			flex: style?.item?.flex,
		},
	});

	const navigation = useNavigation();

	const [loading, setLoading] = useState(false);
	return (
		<TouchableOpacity
			disabled={disabled}
			style={styled.item}
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
				style={styled.item}
				resizeMode="cover"
				onLoadEnd={() => {
					setLoading(true);
				}}
			/>
		</TouchableOpacity>
	);
};

export default GiphyItem;
