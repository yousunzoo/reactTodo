import axios from 'axios';
import React, { useContext, useState } from 'react';
import { TodoContext } from '..';
import { createTodo, getTodos } from '../../../api/api';
import * as S from './style';

function AddTodo() {
	const [todo, setTodo] = useState();
	const { todoList, setTodoList } = useContext(TodoContext);

	const onKeyDown = async (e) => {
		if (e.key === 'Enter') {
			await createTodo(todo);
			const result = await getTodos();
			setTodoList([...result]);
			setTodo('');
		}
	};
	const onChange = (e) => {
		setTodo(e.target.value);
	};
	const onClick = async () => {
		await createTodo(todo);
		const result = await getTodos();
		setTodoList([...result]);
		setTodo('');
	};

	return (
		<S.AddTodo>
			<S.Input onChange={onChange} onKeyDown={onKeyDown} value={todo} placeholder='할 일을 입력하세요' />
			<S.Button onClick={onClick}>추가</S.Button>
		</S.AddTodo>
	);
}

export default AddTodo;
