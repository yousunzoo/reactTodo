import React, { useEffect, useState } from 'react';
import TodoItem from '../TodoItem';
import * as S from './style';

function TodoList({ todoList }) {
	return (
		<S.TodoListUl>
			{todoList.map((todo) => {
				return <TodoItem key={todo.id} todo={todo} />;
			})}
		</S.TodoListUl>
	);
}

export default TodoList;
