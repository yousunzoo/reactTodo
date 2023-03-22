import React, { useState } from 'react';
import * as S from './style';

function TodoItem({ todo }) {
	const [isChecked, setIsChecked] = useState(todo.done);
	const onChange = () => {
		setIsChecked(!isChecked);
	};
	return (
		<S.TodoLi>
			<S.Checkbox>
				<input type='checkbox' checked={isChecked} onChange={onChange} />
				<span className='material-symbols-outlined'>{isChecked ? 'check_circle' : 'radio_button_unchecked'}</span>
			</S.Checkbox>
			<span className={isChecked ? 'activated todo-title' : 'todo-title'}>{todo.title}</span>
			<S.DragButton>
				<span className='material-symbols-outlined'>drag_handle</span>
			</S.DragButton>
		</S.TodoLi>
	);
}

export default TodoItem;
