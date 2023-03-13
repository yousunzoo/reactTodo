import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '..';
import { deleteTodo, getTodos } from '../../../api/api';
import * as S from './style';

function TodoList() {
	const { todoList, setTodoList } = useContext(TodoContext);
	const onClick = async (id) => {
		await deleteTodo(id);
		const result = await getTodos();
		setTodoList([...result]);
	};
	return (
		<S.TodoList>
			{todoList.map((todo) => {
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
			})}
		</S.TodoList>
	);
}

export default TodoList;
