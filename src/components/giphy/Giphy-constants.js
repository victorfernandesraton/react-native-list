export const initialState = {
	items: [],
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
};
