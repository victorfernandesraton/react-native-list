import Axios from 'axios';

const giphyHttp = Axios.create({
	baseURL: 'api.giphy.com/v1',
	params: {
		api_key: process.env.REAACT_APP_GIPHY_KEY,
	},
});

export const searchGiphy = ({
	type = 'gifs',
	q,
	limit = 10,
	offset = 0,
	lang = 'pt',
}) => {
	const url = `${type}/search`;
	return giphyHttp.get(url, {
		params: {
			q,
			limit,
			offset,
			lang,
		},
	});
};

export const gifInformation = ({ type = 'gifs', id }) => {
	const url = `${type}/${id}`;
	return giphyHttp.get(url);
};
