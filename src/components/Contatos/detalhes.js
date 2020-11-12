import React from 'react';

import { View,
	Text,
	StyleSheet,
	Image, } from 'react-native';

const Detalhe = (props) => {
	const { route } = props;
	const { item } = route.params;

	return (
        
		<View>
            <Image source={{ uri: item.picture.thumbnail }} style={styles.avatar}/>
			<Text>{'Nome: '+ item.name.first + " " + item.name.last}</Text>
            <Text>{'Sexo: ' + item.gender}</Text>
            <Text>{'Cidade: ' + item.location.city}</Text>
            <Text>{'Estado: ' + item.location.state}</Text>
         </View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 0,
		marginLeft: 10,
		backgroundColor: '#FFFFFF',

		borderTopWidth: 0,
		borderBottomWidth: 0,
	},
	productContainer: {
		backgroundColor: '#fff',
		//borderWidth: 1,
		//borderColor: 1,                                                                                      borderRadius: 5,
		padding: 20,
		marginBottom: 20,
	},
	logo: {
		width: 100,
		height: 100,
		borderRadius: 100,
	},
	line: {
		height: 50,
		flexDirection: 'row',
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
        marginRight: 10,
        marginBottom: 10,
		alignSelf: 'center',
	},
	info: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	name: {
		color: '#000000',
		fontSize: 12,
	},
	email: {
		color: '#000000',
		fontSize: 14,
		fontWeight: 'bold',
	},
});

export default Detalhe;
