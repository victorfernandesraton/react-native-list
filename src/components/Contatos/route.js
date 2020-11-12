import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContatoDetalhes from './detalhes';
import ContatoLista from '../../screen/telaContatos';

const StackContatos = createStackNavigator();
export default function Index() {
	return (
		<StackContatos.Navigator
			initialRouteName="contato-lista"
			screenOptions={{
				headerShown: false,
			}}
		>
			<StackContatos.Screen name="contato-lista" component={ContatoLista} />
			<StackContatos.Screen
				name="contato-detalhe"
				component={ContatoDetalhes}
				options={{
					headerShown: true,
					title: 'Detalhes',
				}}
			/>
		</StackContatos.Navigator>
	);
}
