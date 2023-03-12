import { axiosAPI } from '../utils/axiosConfig';

export const createTodo = async (todo) => {
	const response = await axiosAPI.post('', { title: todo });
	return response.data;
};

export const getTodos = async () => {
	const response = await axiosAPI.get('');
	return response.data;
};

export const deleteTodo = async (todoId) => {
	const response = await axiosAPI.delete(`/${todoId}`);
	return response.data;
};
