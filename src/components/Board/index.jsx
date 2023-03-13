import React, { createContext, useEffect, useState } from 'react';
import { getTodosAPI } from '../../api/api';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import * as S from './style';
import TodoList from './TodoList';

export const TodoContext = createContext();

function Board() {
	const [todoList, setTodoList] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [todoItem, setTodoItem] = useState({});

	const setPostsByResponse = async () => {
		const data = await getTodosAPI();
		setTodoList([...data]);
	};

	useEffect(() => {
		setPostsByResponse();
	}, []);

	return (
		<S.BoardArea>
			<S.Board>
				<S.H1>Todo List</S.H1>
				<TodoContext.Provider value={{ todoList, setTodoList, isEditing, setIsEditing, todoItem, setTodoItem }}>
					<AddTodo />
					<TodoList />
					{isEditing && <EditTodo />}
				</TodoContext.Provider>
			</S.Board>
		</S.BoardArea>
	);
}

export default Board;
