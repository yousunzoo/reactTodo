import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, removeTodo } from '../../store/slices/todoSlice';
import * as S from './style';

function TodoItem({ todo }) {
	const dragEl = useRef();
	const dispatch = useDispatch();
	const [userTodo, setUserTodo] = useState({ ...todo });
	const [isDisabled, setDisabled] = useState(true);

	const handleDone = () => {
		setUserTodo({ ...userTodo, done: !userTodo.done });
		dispatch(editTodo({ ...userTodo, done: !userTodo.done }));
	};

	const handleDeleteItem = () => {
		dispatch(removeTodo(userTodo.id));
	};
	const handleEditTitle = (e) => {
		setUserTodo({ ...userTodo, title: e.target.value });
	};
	const handleTitleInput = () => {
		setDisabled(!isDisabled);
		if (!isDisabled) {
			dispatch(editTodo(userTodo));
		}
	};

	return (
		<S.TodoLi>
			<S.Checkbox>
				<input type='checkbox' checked={userTodo.done} onChange={handleDone} />
				<span className='material-symbols-outlined'>{userTodo.done ? 'check_circle' : 'radio_button_unchecked'}</span>
			</S.Checkbox>
			<S.TodoTitle type='text' className={userTodo.done && 'done'} value={userTodo.title} disabled={isDisabled} onChange={handleEditTitle} />
			<S.EditButton ref={dragEl} onClick={handleTitleInput}>
				<span className='material-symbols-outlined'>{isDisabled ? 'edit' : 'done'}</span>
			</S.EditButton>
			<S.DeleteButton onClick={handleDeleteItem}>
				<span className='material-symbols-outlined'>delete</span>
			</S.DeleteButton>
		</S.TodoLi>
	);
}

export default TodoItem;
