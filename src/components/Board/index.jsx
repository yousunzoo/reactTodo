import React from 'react';
import AddTodo from './AddTodo';
import * as S from './style';
import TodoList from './TodoList';
function Board() {
	return (
		<S.BoardArea>
			<S.Board>
				<S.H1>Todo List</S.H1>
				<AddTodo />
				<TodoList />
			</S.Board>
		</S.BoardArea>
	);
}

export default Board;
