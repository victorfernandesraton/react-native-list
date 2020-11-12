import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

const Detalhe = (props) => {
	const {route} = props;
	const {item} = route.params;

	return (
		<TouchableOpacity>
			<Text>{item.name.first}</Text>
		</TouchableOpacity>
	);
};

export default Detalhe;