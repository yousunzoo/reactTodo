import React, { useRef, useState } from 'react';
import * as S from './style';

function AddTodoForm() {
	const todo = useRef();
	const addTodo = (e) => {
		e.preventDefault();
		console.log(todo.current.value);
	};
	return (
		<S.AddTodoForm>
			<S.AddInput placeholder='할 일을 입력해주세요' ref={todo} />
			<S.AddButton onClick={addTodo}>
				<span className='material-symbols-outlined'>add_box</span>
			</S.AddButton>
		</S.AddTodoForm>
	);
}

export default AddTodoForm;
