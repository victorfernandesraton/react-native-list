import React, { useEffect, useReducer } from 'react';
import { View } from 'react-native';

import Reducer from '../components/giphy/Giphy-reducer';
import { initialState } from '../components/giphy/Giphy-constants';
import { fetcgGifById } from '../components/giphy/Giphy-action';
import GiphySingleView from '../components/giphy/GiphySingleView-container';

export default function SingleGiphyScreen(props) {
	const { route } = props;
	const { id, type } = route.params;
	const [state, dispatch] = useReducer(Reducer, initialState);
	const { items, loading } = state;

	useEffect(() => {
		fetcgGifById(dispatch, { id, type });
	}, [id, type]);

	if (loading) {
		return <></>;
	}
	return (
		<View>
			<GiphySingleView item={items?.[0]} key={id} />
		</View>
	);
}
