import React, { createContext, useEffect, useState } from 'react';
import { getTodos } from '../../api/api';
import AddTodo from './AddTodo';
import * as S from './style';
import TodoList from './TodoList';

export const TodoContext = createContext();

function Board() {
	const [todoList, setTodoList] = useState([]);

	const setPostsByResponse = async () => {
		const data = await getTodos();
		setTodoList([...data]);
	};

	useEffect(() => {
		setPostsByResponse();
	}, []);

	return (
		<S.BoardArea>
			<S.Board>
				<S.H1>Todo List</S.H1>
				<TodoContext.Provider value={{ todoList, setTodoList }}>
					<AddTodo />
					<TodoList todoList={todoList} />
				</TodoContext.Provider>
			</S.Board>
		</S.BoardArea>
	);
}

export default Board;
