import React, { Suspense, useState } from 'react';
import {
	ActivityIndicator,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
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
		fallback: {
			backgroundColor: '#20232A',
			display: 'flex',
			height: '100%',
			justifyContent: 'center',
			alignItems: 'center',
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
			{!loading && (
				<View style={{...styled.fallback}}>
					<ActivityIndicator color='yellow' style={{
						alignSelf: 'center'
					}} />
				</View>
			)}
			<Image source={{ uri: url }} style={styled.item} resizeMode="cover" onLoadEnd={() => {
				setLoading(true);
			}} />
		</TouchableOpacity>
	);
};

export default GiphyItem;
