import React, { useEffect, useState } from 'react';
import * as S from './style';

function TodoList({ todoList }) {
	return (
		<S.TodoList>
			{todoList.map((todo) => {
				return (
					<S.TodoLi key={todo.id}>
						<input type='checkbox' checked={todo.done} />
						<span className='todoText'>{todo.title}</span>
					</S.TodoLi>
				);
			})}
		</S.TodoList>
	);
}

export default TodoList;
