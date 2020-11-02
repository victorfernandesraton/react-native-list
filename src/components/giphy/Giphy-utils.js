export const calculePagination = ({ limit, offset, total }) => {
	const nextOffset = (Math.floor(offset / limit) + 1) * limit;
	const hasNext = total > nextOffset;
	return {
		offset:
			offset === 0 ? (hasNext ? limit : 0) : hasNext ? nextOffset : offset,
		limit,
		total,
		next: hasNext,
	};
};
