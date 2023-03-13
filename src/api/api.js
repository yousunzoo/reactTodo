import { axiosAPI } from '../utils/axiosConfig';

export const createTodoAPI = async (todo) => {
	const response = await axiosAPI.post('', { title: todo });
	return response.data;
};

export const getTodosAPI = async () => {
	const response = await axiosAPI.get('');
	return response.data;
};

export const deleteTodoAPI = async (todoId) => {
	const response = await axiosAPI.delete(`/${todoId}`);
	return response.data;
};

export const editTodoAPI = async (todo) => {
	const response = await axiosAPI.put(`/${todo.id}`, { title: todo.title, done: todo.done, order: todo.order });
};
