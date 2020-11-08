import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import TopBarView from '../components/topbar/TopBarView-container';
import Turism from '../components/turism/turismMain'

const Turismscreen = () => {
	return (
		<View>
			<TopBarView title="Melhores lugares para conhecer" />
			<Turism />
		</View>
	)
}

export default Turismscreen



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
