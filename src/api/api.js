import { axiosAPI } from '../utils/axiosConfig';

export const createTodo = async (todo) => {
	const response = await axiosAPI.post('', { title: todo });
	return response.data;
};

export const getTodos = async () => {
	const response = await axiosAPI.get('');
	return response.data;
};
