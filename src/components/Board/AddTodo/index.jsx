import React, { useContext, useState } from 'react';
import { TodoContext } from '..';
import { createTodo, getTodos } from '../../../api/api';
import * as S from './style';

function AddTodo() {
	const [todo, setTodo] = useState('');
	const [isFilled, setIsFilled] = useState(true);
	const { setTodoList } = useContext(TodoContext);

	const onKeyDown = async (e) => {
		if (e.nativeEvent.isComposing) return;
		if (e.key === 'Enter') {
			if (todo === '') {
				setIsFilled(false);
				return;
			}
			await createTodo(todo);
			const result = await getTodos();
			setTodoList([...result]);
			setTodo('');
		}
	};
	const onChange = (e) => {
		setTodo(e.target.value);
		setIsFilled(true);
	};
	const onClick = async () => {
		if (todo === '') {
			setIsFilled(false);
			return;
		}
		await createTodo(todo);
		const result = await getTodos();
		setTodoList([...result]);
		setTodo('');
	};

	return (
		<S.AddTodo>
			<S.Input onChange={onChange} onKeyDown={onKeyDown} value={todo} placeholder='할 일을 입력하세요' className={isFilled ? '' : 'noText'} />
			<S.Button onClick={onClick}>추가</S.Button>
		</S.AddTodo>
	);
}

export default AddTodo;
