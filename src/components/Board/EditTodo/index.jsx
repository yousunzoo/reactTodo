import React, { useContext } from 'react';
import { TodoContext } from '..';
import { editTodoAPI, getTodosAPI } from '../../../api/api';
import * as S from './style';

function EditTodo() {
	const { isEditing, setIsEditing, todoItem, setTodoItem, setTodoList } = useContext(TodoContext);

	const handleEditTodo = async () => {
		await editTodoAPI(todoItem);
		const result = await getTodosAPI();
		setTodoList([...result]);
		setIsEditing(false);
	};

	return (
		<S.EditTodoArea>
			<S.EditTodo>
				<h2>할 일을 수정해주세요</h2>
				<S.EditArea>
					<input
						onChange={(e) => {
							setTodoItem({ ...todoItem, title: e.target.value });
						}}
						value={todoItem.title}
					/>
					<button onClick={handleEditTodo}>수정</button>
				</S.EditArea>
			</S.EditTodo>
		</S.EditTodoArea>
	);
}

export default EditTodo;
