import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import TopBarView from '../components/topbar/TopBarView-container';
const renderItem = ({ item }) => (
  <View style={{ height: 200, width: 800 }}>
    <Text>{`${item.name}`}</Text>
  </View>
);
export default function Index(props) {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'victor',
    },
    {
      id: '2',
      name: 'victor',
    },
    {
      id: '3',
      name: 'victor',
    },
    {
      id: '010',
      name: 'victor',
    },
    {
      id: '4',
      name: 'victor',
    },
    {
      id: '5',
      name: 'victor',
    },
    {
      id: '6',
      name: 'victor',
    },
  ]);
  return (
    <View style={styles.container}>
       <TopBarView {...props} title="Spotfy" />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Teste meu caro</Text>
        <Text>{data.length}</Text>
        <FlatList
          data={data}
          extraData={data}
          // maxToRenderPerBatch={3}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          onEndReached={() => {
            setData([{ id: data.length + 1, name: 'teste' }, ...data]);
          }}
          onEndReachedThreshold={0.001}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
