import React, { useCallback, useEffect, useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import TopBarView from '../components/topbar/TopBarView-container';
import GiphyView from '../components/giphy/GiphyView-container';

import {initialState} from '../components/giphy/Giphy-constants';
import {fetchGifs, fetchGifsPagination, nextPage} from '../components/giphy/Giphy-action';

import Reducer from '../components/giphy/Giphy-reducer'
export default function Index(props) {

	const [state, dispatch] = useReducer(Reducer, initialState);
	const {loading, called, items} = state;
	useEffect(() => {
		if(!loading) {
			fetchGifs(dispatch, {q: 'cokie', })
		}
	}, [props, loading])
  return (
    <View style={styles.container}>
       <TopBarView {...props} title="Spotfy" />
      <View style={styles.container}>
        <GiphyView
					data={items}
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
