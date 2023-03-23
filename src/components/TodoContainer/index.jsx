import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../store/slices/todoSlice';
import AddTodoForm from '../AddTodoForm';
import Loader from '../Loader';
import Modal from '../Modal';
import TabList from '../TabList';
import TodoList from '../TodoList';

export const ModalContext = createContext();
function TodoContainer() {
	const dispatch = useDispatch();
	const { isLoading, todoList } = useSelector((state) => state.todo);
	const [activateModal, setActivateModal] = useState(false);

	useEffect(() => {
		dispatch(getTodos());
	}, []);

	const toggleActivetModal = () => {
		setActivateModal((prev) => !prev);
	};
	return (
		<>
			<ModalContext.Provider value={{ activateModal, setActivateModal }}>
				<TabList toggleActivetModal={toggleActivetModal} />
				{isLoading ? <Loader /> : <TodoList todoList={todoList} />}
				<AddTodoForm />
				<Modal todoList={todoList} toggleActivetModal={toggleActivetModal} />
			</ModalContext.Provider>
		</>
	);
}

export default TodoContainer;
