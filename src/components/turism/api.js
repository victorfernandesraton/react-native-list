import axios from 'axios';

const api = axios.create({
	baseURL: 'https://5fa7f9b59def160016adb240.mockapi.io/mockapi/turismo',
});

export default api;
