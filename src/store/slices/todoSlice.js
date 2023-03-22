import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../apis/axios';

const initialState = {
	loading: false,
	todoList: [],
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
	const response = await axiosInstance.put(`/${todo.id}`);
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
			state.loading = true;
		},
		[getTodos.fulfilled]: (state, action) => {
			state.loading = false;
			state.todoList = action.payload;
		},
		[getTodos.rejected]: (state) => {
			state.loading = false;
		},
		[addTodo.pending]: (state) => {
			state.loading = true;
		},
		[addTodo.fulfilled]: (state, action) => {
			state.loading = false;
			state.todoList.push(action.payload);
		},
		[addTodo.rejected]: (state) => {
			state.loading = false;
		},
	},
});

export default todoSlice.reducer;
