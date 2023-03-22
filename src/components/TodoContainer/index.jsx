import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../store/slices/todoSlice';
import AddTodoForm from '../AddTodoForm';
import TabList from '../TabList';
import TodoList from '../TodoList';

function TodoContainer() {
	const dispatch = useDispatch();
	const { isLoading, todoList, isDeleted } = useSelector((state) => state.todo);
	useEffect(() => {
		dispatch(getTodos());
	}, [isDeleted]);
	return (
		<div>
			<TabList />
			<TodoList todoList={todoList} />
			<AddTodoForm />
		</div>
	);
}

export default TodoContainer;
