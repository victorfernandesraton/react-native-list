import React, { useCallback, useEffect, useReducer } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Share,
	StyleSheet,
	ScrollView,
} from 'react-native';

import GiphyItem from './GiphyItem';
import { shareSingleImage, changeShareUrl } from './Giphy-action';
import { initialState, buttonShare, buttonType } from './Giphy-constants';
import Reducer from './Giphy-reducer';
import GiphyButtonType from './GiphyButtonType';
import GiphySingleText from './GiphySingleText';

export default function GiphySingleView({ item }) {
	const [{ share }, dispatch] = useReducer(Reducer, initialState);

	const changeUrl = useCallback(
		(type) => {
			changeShareUrl(dispatch, { item, type });
		},
		[share, item]
	);

	useEffect(() => {
		changeUrl('small');
	}, []);

	return (
		<ScrollView>
			<View style={styled.buttonShareContainer}>
				{buttonShare.map((e, k) => (
					<GiphyButtonType
						disabled={share.type === e.value}
						title={e.title}
						key={k}
						onPress={() => changeUrl(e.value)}
					/>
				))}
				<TouchableOpacity
					style={styled.buttonShare}
					onPress={() => {
						shareSingleImage(dispatch, Share, { url: share.url });
					}}
				>
					<Text style={styled.buttonShareText}>Compartilhar</Text>
				</TouchableOpacity>
			</View>
			<View style={styled.container}>
				<GiphyItem
					style={{ item: { flex: 0 } }}
					disabled
					key={item.slug}
					item={item}
					type="original"
				/>
				<View style={styled.textContainer}>
					{item?.title && (
						<GiphySingleText label="Título" content={item?.title} />
					)}
					{item?.user && (
						<GiphySingleText
							label="By"
							link={item?.user?.profile_url}
							content={`@${item?.user?.username}`}
						/>
					)}
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-start',
							marginVertical: 8,
						}}
					>
						<Text style={{ ...styled.textStyle, marginRight: 16 }}>Tipo:</Text>
						{buttonType.length > 0 && (
							<GiphyButtonType disabled title={item.type} />
						)}
					</View>
					{item?.url && (
						<GiphySingleText
							label="fonte"
							link={item?.url}
							content={`Clique aqui`}
						/>
					)}
				</View>
			</View>
		</ScrollView>
	);
};

const styled = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	buttonShareContainer: {
		margin: 16,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonShare: {
		marginHorizontal: 8,
		height: 40,
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		padding: 8,
		backgroundColor: '#212121',
	},
	buttonShareText: {
		fontSize: 12,
		color: '#fafafa',
	},
	textContainer: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		alignContent: 'flex-start',
	},
	textStyle: {
		color: '#fafafa',
		fontSize: 16,
		marginVertical: 4,
	},
	textSpam: {
		color: '#dadada',
	},
	textUrl: {
		textDecorationStyle: 'solid',
		color: '#45DCD2',
	},
});