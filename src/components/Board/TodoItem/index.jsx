import React, { useContext, useState } from 'react';
import { TodoContext } from '..';
import { deleteTodoAPI, getTodosAPI } from '../../../api/api';
import * as S from './style';

function TodoItem({ todo }) {
	const { setTodoList, setIsEditing, setTodoItem } = useContext(TodoContext);

	const handleDeleteItem = async (id) => {
		await deleteTodoAPI(id);
		const result = await getTodosAPI();
		setTodoList([...result]);
	};

	return (
		<S.TodoLi key={todo.id}>
			<input type='checkbox' readOnly={true} checked={todo.done} />
			<span className='todoText'>{todo.title}</span>
			<button
				className='editTodo'
				onClick={() => {
					setIsEditing(true);
					setTodoItem(todo);
				}}>
				수정
			</button>
			<button
				className='deleteTodo'
				onClick={() => {
					handleDeleteItem(todo.id);
				}}>
				삭제
			</button>
		</S.TodoLi>
	);
}

export default TodoItem;
