import React, { useContext, useEffect, useRef, useState } from 'react';
import { TodoContext } from '..';
import { deleteTodoAPI, editTodoAPI, getTodosAPI } from '../../../api/api';
import * as S from './style';

function TodoItem({ todo }) {
	const { setTodoList, setIsEditing, todoItem, setTodoItem } = useContext(TodoContext);
	const [isDone, setIsDone] = useState(todo.done);
	const isChanged = useRef(false);

	const handleDeleteItem = async (id) => {
		await deleteTodoAPI(id);
		const result = await getTodosAPI();
		setTodoList([...result]);
	};
	const handleChangeDone = async (todo) => {
		setIsDone(!isDone);
		setTodoItem({ ...todo, done: !isDone });
		isChanged.current = true;
	};

	const setPostsByResponse = async () => {
		if (isChanged.current) {
			await editTodoAPI(todoItem);
			const data = await getTodosAPI();
			setTodoList([...data]);
		}
	};

	useEffect(() => {
		setPostsByResponse();
	}, [isDone]);

	return (
		<S.TodoLi>
			<input
				type='checkbox'
				onChange={() => {
					handleChangeDone(todo);
				}}
				checked={isDone}
			/>
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
