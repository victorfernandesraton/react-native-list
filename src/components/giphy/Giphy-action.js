import { dispatch as dispatchType } from './Giphy-constants';
import { searchGiphy } from './Giphy-request';
import { calculePagination } from './Giphy-utils';

const getGifs = (typeDispatch) => async (dispatch, payload) => {
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
				},
			},
		});
	} catch (error) {
		dispatch({
			type: typeDispatch.ERROR,
			payload: { error: error },
		});
		throw new Error(error)
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
