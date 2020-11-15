import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';

const More = () => {
	const navigation = useNavigation();

	return (
		<View>
			<Text>{ item.item.name }</Text>
			<Text>{ item.item.description }</Text>
			<Text>{ item.item.createdAt }</Text>
			<Text>{ item.item.url }</Text>
		</View>
	);
};

export default More;
