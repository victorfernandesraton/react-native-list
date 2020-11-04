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

export const extractGiphyData = ({ item, type = 'preview' }) => {
	const { fixed_width, original, title } = item.images;
	const { width, height, url} = type == 'preview' ? fixed_width : original;
	return {
		url,
		title,
		width: parseInt(width),
		height: parseInt(height),
	};
};
