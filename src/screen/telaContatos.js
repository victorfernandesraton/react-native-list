import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import TopBarView from '../components/topbar/TopBarView-container';
import Contatos from '../components/Contatos/contactMain';

const telaContatos = (props) => {
	return (
		<View style={styles.container}>
			<TopBarView
				{...props}
				title="Meus contatos"
				buttonColor={'#fafafa'}
				backgroundColor="#FF0000"
				titleStyle={{ color: '#fafafa' }}
			/>
			<Contatos {...props} />
		</View>
	);
};

export default telaContatos;

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		flex: 1,
		height: '100%',
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
