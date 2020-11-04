import { dispatch, initialState } from './Giphy-constants';

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case dispatch.FETCHING:
			return { ...state, loading: true };
		case dispatch.ERROR:
			return { ...state, error: payload.error, called: true };
		case dispatch.FETCH:
			return {
				...state,
				metadata: { ...payload.metadata },
				items: [...state.items, ...payload.items],
				called: true,
				loading: false,
			};
		case dispatch.FIRST_FETCH:
			return {
				...state,
				metadata: { ...payload.metadata },
				items: [...payload.items],
				called: true,
				loading: false,
			};
		case dispatch.TYPE_GIF: 
			return {...state, type: 'gifs'}
		case dispatch.TYPE_STICK:
			return {...state, type: 'stickers'}
		default:
			return state;
	}
};
