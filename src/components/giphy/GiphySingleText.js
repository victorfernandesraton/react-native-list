import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

export default function GiphySingleText({ label, content, link }) {
	return (
		<View style={styled.container}>
			{link ? (
				<>
					<Text style={styled.textStyle}>{`${label}: `}</Text>
					<Text
						style={{ ...styled.textStyle, ...styled.textUrl }}
						onPress={() => {
							Linking.canOpenURL(link)
								.then((data) => {
									Linking.openURL(link);
								})
								.catch((data) => {
									Alert('Unsupported link');
								});
						}}
					>
						{content}
					</Text>
				</>
			) : (
				<>
					<Text style={styled.textStyle}>{`${label}: ${content}`}</Text>
				</>
			)}
		</View>
	);
}

const styled = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
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
