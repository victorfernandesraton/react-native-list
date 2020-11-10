import React, { Component } from 'react';
import api from '../turism/api';

import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	Image,
} from 'react-native';

export default class turismMain extends Component {
	state = {
		docs: [],
	};

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('/lugares');

		this.setState({ docs: response.data });
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Teste</Text>
				<FlatList
					key={this.state.docs.length}
					data={this.state.docs}
					keyExtractor={(item) => item.id}
					renderItem={(item) => <RenderItem item={item} />}
				/>
			</View>
		);
	}
}

const RenderItem = ({ item }) => {
	return (
		<View style={styles.productContainer}>
			<Text style={styles.productTitle}>{item.item.name}</Text>
			<Text style={styles.productDescription}>{item.item.descrition}</Text>
			<View
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Image
					source={{ uri: item.item.image }}
					width={200}
					height={200}
					resizeMode="cover"
				/>
			</View>

			<TouchableOpacity style={styles.productButton}>
				<Text>Acessar</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fafafa',
	},

	list: {
		padding: 20,
	},

	productContainer: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: 1,
		borderRadius: 5,
		padding: 20,
		marginBottom: 20,
	},

	productTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
	},

	productDescription: {
		fontSize: 16,
		color: '#999',
		marginTop: 5,
		lineHeight: 24,
	},

	productButton: {
		height: 42,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#DA552F',
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
});
