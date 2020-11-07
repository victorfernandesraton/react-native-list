import { dispatch as dispatchType } from './Giphy-constants';
import { gifInformation, searchGiphy } from './Giphy-request';
import { calculePagination } from './Giphy-utils';

const getGifs = (typeDispatch) => async (dispatch, payload) => {
	if (!payload.limit) {
		payload.limit = 10;
	}
	dispatch({
		type: typeDispatch.LOADING,
	});

	try {
		const { data } = await searchGiphy({ ...payload });
		dispatch({
			type: typeDispatch.SUCESS,
			payload: {
				items: data?.data,
				metadata: {
					offset: data?.pagination.offset,
					total: data?.pagination?.total_count,
					limit: payload.limit,
					next: data?.pagination.offset < data.pagination.total_count,
				},
			},
		});
	} catch (error) {
		dispatch({
			type: typeDispatch.ERROR,
			payload: { error: error },
		});
		throw new Error(error);
	}
};

export const nextPage = (dispatch, { limit, offset, total }) => {
	dispatch({
		type: dispatchType.FETCH,
		payload: {
			items: [],
			metadata: calculePagination({
				limit,
				offset,
				total,
			}),
		},
	});
};

export const getSingleGif = (typeDispatch) => async (
	dispatch,
	{ id, type = 'gifs' }
) => {
	dispatch({
		type: typeDispatch.LOADING,
	});
	try {
		const { data } = await gifInformation({ id, type });
		dispatch({
			type: typeDispatch.SUCESS,
			payload: {
				items: [data?.data],
				metadata: {
					offset: 0,
					total: 1,
					limit: 1,
					next: false,
				},
			},
		});
	} catch (error) {
		dispatch({
			type: typeDispatch.ERROR,
			payload: { error: error },
		});
		throw new Error(error);
	}
};

export const fetchGifs = getGifs({
	ERROR: dispatchType.ERROR,
	LOADING: dispatchType.FETCHING,
	SUCESS: dispatchType.FIRST_FETCH,
});

export const fetchGifsPagination = getGifs({
	ERROR: dispatchType.ERROR,
	LOADING: dispatchType.FETCHING,
	SUCESS: dispatchType.FETCH,
});

export const fetcgGifById = getSingleGif({
	ERROR: dispatchType.ERROR,
	LOADING: dispatchType.FETCHING,
	SUCESS: dispatchType.FIRST_FETCH,
});

export const ShareImage = (typeDispatch) => async (
	dispatch,
	Share,
	{ item }
) => {
	try {
		await Share.share({
			url: item.images.original.webp,
			title: 'gif',
			message: item.images.original.webp,
		});
	} catch (error) {
		dispatch({
			type: typeDispatch.ERROR,
			payload: { error },
		});
	}
};

export const shareSingleImage = ShareImage({
	ERROR: dispatchType.ERROR,
});
export const changeType = (dispatch, { type }) => {
	dispatch({
		type: type === 'gifs' ? dispatchType.TYPE_STICK : dispatchType.TYPE_GIF,
	});
};

export const changeQuery = (dispatch, { query }) => {
	dispatch({
		type: dispatchType.CHANGE_QUERY,
		payload: { query },
	});
};
