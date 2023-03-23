import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, removeTodo } from '../../store/slices/todoSlice';
import * as S from './style';

function TodoItem({ todo }) {
	const dragEl = useRef();
	const dispatch = useDispatch();
	const [userTodo, setUserTodo] = useState({ ...todo });
	const [isDisabled, setDisabled] = useState(true);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [currentX, setCurrentX] = useState(0);

	const handleMouseDown = (event) => {
		setIsDragging(true);
		setStartX(event.pageX);
	};

	const handleMouseMove = (event) => {
		if (!isDragging) return;
		if (event.pageX - startX > 0) return;
		if (event.pageX - startX < -80) return;
		setCurrentX(event.pageX - startX);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
		if (currentX > -50) {
			setCurrentX(0);
			return;
		}
		setCurrentX(-50);
	};
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
		<S.TodoLi
			style={{
				position: 'relative',
				left: currentX,
				cursor: 'move',
			}}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}>
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
