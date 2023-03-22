import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/slices/todoSlice';
import * as S from './style';

function AddTodoForm() {
	const todo = useRef();
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(todo.current.value));
		todo.current.value = '';
	};
	return (
		<S.AddTodoForm onSubmit={onSubmit}>
			<S.AddInput placeholder='할 일을 입력해주세요' ref={todo} />
			<S.AddButton>
				<span className='material-symbols-outlined'>add_box</span>
			</S.AddButton>
		</S.AddTodoForm>
	);
}

export default AddTodoForm;
