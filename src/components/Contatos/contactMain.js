import { isWithinInterval } from 'date-fns';
import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	Image,
} from 'react-native';
import { withNavigation } from 'react-navigation';

class telaContato extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}
	loadUsers = () => {
		fetch('https://randomuser.me/api/?results=20')
			.then((res) => res.json())
			.then((res) => {
				this.setState({
					data: res.results || [],
				});
			});
	};

	componentDidMount() {
		this.loadUsers();
	}

	render() {
		return (
			<View style={styles.productContainer}>
				<FlatList
					data={this.state.data}
					renderItem={({ item }) => (
						<View style={styles.line}>
							<Image
								source={{ uri: item.picture.thumbnail }}
								style={styles.avatar}
							/>

							<View style={styles.info}>
								<TouchableOpacity
									onPress={() => {
										this.props.navigation.navigate('contato-detalhe', {
											item: item,
										});
									}}
									style={styles.productButton}
								>
									<Text style={styles.email}>{item.email}</Text>
									<Text style={styles.name}>
										{item.name.first} {item.name.last}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					)}
					keyExtractor={(item) => item.email}
				/>
			</View>
		);
	}
}

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
		width: 40,
		height: 40,
		borderRadius: 50,
		marginRight: 10,
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
export default withNavigation(telaContato);
