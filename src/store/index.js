import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './slices/todoSlice';
import todoReducer from './slices/todoSlice';

const rootReducer = combineReducers({
	[todoSlice.name]: todoReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
