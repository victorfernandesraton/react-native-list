import React, { useCallback, useEffect, useReducer } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Share,
	StyleSheet,
	Linking,
	Alert,
	ScrollView,
} from 'react-native';

import GiphyItem from './GiphyItem';
import { shareSingleImage, changeShareUrl } from './Giphy-action';
import { initialState, buttonShare, buttonType } from './Giphy-constants';
import Reducer from './Giphy-reducer';
import GiphyButtonType from './GiphyButtonType';

const GiphySingleView = ({ item }) => {
	const [{ share }, dispatch] = useReducer(Reducer, initialState);

	const changeUrl = useCallback(
		(type) => {
			changeShareUrl(dispatch, { item, type });
		},
		[share, item]
	);

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

	useEffect(() => {
		changeUrl('small');
	}, []);

	console.log(item);
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
					<Text style={styled.textStyle}>{`${item.title}`}</Text>
					{item.user && (
						<View style={{display: 'flex',flexDirection: 'row'}}>
							<Text style={styled.textStyle}>By: </Text>
							<Text
								style={{ ...styled.textStyle, ...styled.textUrl }}
								onPress={() => {
									Linking.canOpenURL(item?.user?.profile_url)
										.then((data) => {
											Linking.openURL(item?.user?.profile_url);
										})
										.catch((data) => {
											Alert('Unsupported link');
										});
								}}
							>
								{`@${item?.user?.username}`}
							</Text>
						</View>
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
				</View>
			</View>
		</ScrollView>
	);
};

export default GiphySingleView;
