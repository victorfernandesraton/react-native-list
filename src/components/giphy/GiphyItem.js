import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { extractGiphyData } from './Giphy-utils';

const GiphyItem = ({ item, type = 'fixed_width', style, disabled = false }) => {
	const { width, height, url } = extractGiphyData({ item, type });
	const styled = StyleSheet.create({
		item: {
			height,
			backgroundColor: '#fafafa',
			width,
			aspectRatio: 1,
			flex: style?.item?.flex,
		},
	});

	const navigation = useNavigation();

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
			<Image source={{ uri: url }} style={styled.item} resizeMode='cover' loadingIndicatorSource={<ActivityIndicator/>} />
		</TouchableOpacity>
	);
};

export default GiphyItem;
