import React from 'react';

import { View, Text } from 'react-native';

const More = (props) => {
	const { route } = props;

	const { item } = route.params;

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
