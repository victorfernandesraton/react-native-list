import { calculePagination } from '../Giphy-utils';

describe('utils test', () => {
	describe('calculePagination', () => {
		test('should pagination', () => {
			expect(calculePagination({ limit: 10, offset: 0, total: 30 })).toEqual({
				limit: 10,
				offset: 10,
				total: 30,
				next: true,
			});
		});

		test('should double pagination', () => {
			const initial = { limit: 10, offset: 0, total: 30 };
			const final = calculePagination(calculePagination(initial));
			expect(final).toEqual({
				limit: 10,
				offset: 20,
				total: 30,
				next: false,
			});
		});

		test('should not have total before', () => {
			const initial = { limit: 10, offset: 0, total: 15 };
			const final = calculePagination(calculePagination(initial));
			expect(final).toEqual({
				limit: 10,
				offset: 10,
				total: 15,
				next: false,
			});
		});
		test('should not have itens', () => {
			const initial = { limit: 10, offset: 0, total: 0 };
			const final = calculePagination(calculePagination(initial));
			expect(final).toEqual({
				limit: 10,
				offset: 0,
				total: 0,
				next: false,
			});
		});
			
	});
});
