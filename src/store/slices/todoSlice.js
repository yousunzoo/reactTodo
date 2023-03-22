import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../apis/axios';

const initialState = {
	isLoading: false,
	todoList: [],
	isDeleted: false,
};

export const addTodo = createAsyncThunk('todo/add', async (todo) => {
	const response = await axiosInstance.post('', { title: todo });
	return response.data;
});
export const removeTodo = createAsyncThunk('todo/remove', async (id) => {
	const response = await axiosInstance.delete(`/${id}`);
	return response.data;
});

export const getTodos = createAsyncThunk('todo/get', async () => {
	const response = await axiosInstance.get('');
	return response.data;
});
export const editTodo = createAsyncThunk('todo/edit', async (todo) => {
	const response = await axiosInstance.put(`/${todo.id}`, { title: todo.title, done: todo.done, order: todo.order });
	return response.data;
});
export const reorderTodos = createAsyncThunk('todo/reorder', async (todos) => {
	const response = await axiosInstance.put('/reorder');
	return response.data;
});

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {},
	extraReducers: {
		[getTodos.pending]: (state) => {
			state.isLoading = true;
			state.isDeleted = false;
		},
		[getTodos.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.todoList = action.payload;
		},
		[getTodos.rejected]: (state) => {
			state.isLoading = false;
		},
		[addTodo.pending]: (state) => {
			state.isLoading = true;
			state.isDeleted = false;
		},
		[addTodo.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.todoList.push(action.payload);
		},
		[addTodo.rejected]: (state) => {
			state.isLoading = false;
		},
		[removeTodo.pending]: (state) => {
			state.isLoading = true;
		},
		[removeTodo.fulfilled]: (state) => {
			state.isLoading = false;
			state.isDeleted = true;
		},
		[removeTodo.rejected]: (state) => {
			state.isLoading = false;
			state.isDeleted = false;
		},
		[editTodo.pending]: (state) => {
			state.isLoading = true;
			state.isDeleted = false;
		},
		[editTodo.fulfilled]: (state) => {
			state.isLoading = false;
		},
		[editTodo.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default todoSlice.reducer;