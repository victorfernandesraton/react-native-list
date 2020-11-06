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
	const { width, height, url} = item.images[type || 'fixed_width'];
	return {
		url,
		title: item.title,
		width: parseInt(width),
		height: parseInt(height),
	};
};
