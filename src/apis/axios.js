import axios from 'axios';

const headers = {
	'content-type': import.meta.env.VITE_CONTENT_TYPE,
	apikey: import.meta.env.VITE_APIKEY,
	username: import.meta.env.VITE_USERNAME,
};

const getAxiosInstance = () => {
	const instance = axios.create({
		baseURL: import.meta.env.VITE_SERVER_URL,
		headers,
	});
	return instance;
};

export const axiosInstance = getAxiosInstance();
