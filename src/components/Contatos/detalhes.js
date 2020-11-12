import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';

const detalhe = () => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity>
			<Text>Mostrar mais</Text>
		</TouchableOpacity>
	);
};

export default detalhe;