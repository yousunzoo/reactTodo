import axios from 'axios';

const headers = {
	'content-type': 'application/json',
	apikey: 'FcKdtJs202301',
	username: 'KDT4_YooSeonJu',
};

export const axiosAPI = axios.create({
	baseURL: import.meta.env.VITE_TODO_URL,
	headers,
});
