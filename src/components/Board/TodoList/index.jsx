import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '..';
import { deleteTodo, getTodos } from '../../../api/api';
import TodoItem from '../TodoItem';
import * as S from './style';

function TodoList() {
	const { todoList } = useContext(TodoContext);

	return (
		<S.TodoList>
			{todoList.map((todo) => {
				return <TodoItem key={todo.id} todo={todo} />;
			})}
		</S.TodoList>
	);
}

export default TodoList;
