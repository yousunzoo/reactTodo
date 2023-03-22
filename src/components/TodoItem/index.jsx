import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, removeTodo } from '../../store/slices/todoSlice';
import * as S from './style';

function TodoItem({ todo }) {
	const dragEl = useRef();
	const dispatch = useDispatch();
	const [isChecked, setIsChecked] = useState(todo.done);
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
		setIsChecked(!isChecked);
		dispatch(editTodo({ ...todo, done: !isChecked }));
	};

	const handleDeleteItem = () => {
		dispatch(removeTodo(todo.id));
	};

	return (
		<S.TodoLi
			ref={dragEl}
			style={{
				position: 'relative',
				left: currentX,
				cursor: 'move',
			}}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}>
			<S.Checkbox>
				<input type='checkbox' checked={isChecked} onChange={handleDone} />
				<span className='material-symbols-outlined'>{isChecked ? 'check_circle' : 'radio_button_unchecked'}</span>
			</S.Checkbox>
			<span className={isChecked ? 'activated todo-title' : 'todo-title'}>{todo.title}</span>
			<S.DragButton>
				<span className='material-symbols-outlined'>drag_handle</span>
			</S.DragButton>
			<S.DeleteButton onClick={handleDeleteItem}>
				<span className='material-symbols-outlined'>delete</span>
			</S.DeleteButton>
		</S.TodoLi>
	);
}

export default TodoItem;
