import React, { useContext } from 'react';
import { TodoContext } from '..';
import { deleteTodo, getTodos } from '../../../api/api';
import * as S from './style';

function TodoItem({ todo }) {
	const { setTodoList } = useContext(TodoContext);

	const onClick = async (id) => {
		await deleteTodo(id);
		const result = await getTodos();
		setTodoList([...result]);
	};

	return (
		<S.TodoLi key={todo.id}>
			<input type='checkbox' readOnly={true} checked={todo.done} />
			<span className='todoText'>{todo.title}</span>
			<button className='editTodo'>수정</button>
			<button
				className='deleteTodo'
				onClick={() => {
					onClick(todo.id);
				}}>
				삭제
			</button>
		</S.TodoLi>
	);
}

export default TodoItem;
