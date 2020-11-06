import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { extractGiphyData } from './Giphy-utils';

const GiphyItem = ({ item, type = 'fixed_width', style , disabled=false}) => {
	const { width, height, url } = extractGiphyData({ item, type });
	const styled = StyleSheet.create({
		item: {
			height,
			width,
			aspectRatio: 1,
			flex: style?.item?.flex
		},
	});

	const navigation = useNavigation();

	return (
		<TouchableOpacity
			disabled={disabled}
			style={styled.item}
			onPress={() => {
				if (type === 'fixed_width') {
					navigation.navigate('giphy-single', {
						id: item.id,
					});
				}
			}}
		>
			<Image source={{ uri: url }} style={styled.item} />
		</TouchableOpacity>
	);
};

export default GiphyItem;
