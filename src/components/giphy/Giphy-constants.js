export const initialState = {
	items: [],
	share: {
		url: '',
		type: 'small'
	},
	query: '',
	metadata: {
		offset: 0,
		total: 0,
		limit: 0,
		next: true,
	},
	loading: false,
	called: false,
	error: null,
	type: 'gifs',
};

export const dispatch = {
	FETCH: 'FETCH',
	FIRST_FETCH: 'FIRST_FETCH',
	FETCHING: 'FETCHING',
	CHANGE_QUERY: 'CHANGE_QUERY',
	ERROR: 'ERROR',
	TYPE_GIF: 'TYPE_GIF',
	TYPE_STICK: 'TYPE_STICK',
	SET_SHARE_URL: 'SET_SHARE_URL',
};

export const buttonShare = [
	{ title: 'Pequeno', value: 'small' },
	{ title: 'Grande', value: 'large' },
];
