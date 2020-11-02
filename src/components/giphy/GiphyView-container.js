import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const renderItem = ({ item }) => (
  <View style={{ height: 200, width: 800 }}>
    <Text>{`${item.title}`}</Text>
  </View>
);

function GiphyView({data, pagination}) {
	return (
		<FlatList
			data={data}
			extraData={data}
			// maxToRenderPerBatch={3}
			keyExtractor={(item) => item.id.toString()}
			renderItem={renderItem}
			onEndReached={pagination}
			onEndReachedThreshold={0.001}
		/>
	);
}

export default GiphyView;
