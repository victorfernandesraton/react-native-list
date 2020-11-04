import Axios from 'axios';

const giphyHttp = Axios.create({
	baseURL: 'https://api.giphy.com/v1',
	params: {
		//TODO colocar enm env de anbiente
		// api_key: process.env.REAACT_APP_GIPHY_KEY,
		api_key: 'wdLwMP4iGP6oZRWh7l1dZ5yp27tRsXuY',
	},
	headers: {
		'Content-Type': 'application/json'
	}
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
