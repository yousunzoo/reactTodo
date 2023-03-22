import { AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../store/slices/todoSlice';
import { ModalContext } from '../TodoContainer';
import * as S from './style';

function Modal({ toggleActivetModal, todoList }) {
	const { activateModal } = useContext(ModalContext);
	const todosIdArr = todoList.map((todo) => todo.id);
	const dispatch = useDispatch();

	const deleteAll = () => {
		todosIdArr.map((id) => {
			dispatch(removeTodo(id));
		});
	};
	const handleDeleteAll = () => {
		deleteAll();
		toggleActivetModal();
	};
	if (!activateModal) return;
	return (
		<AnimatePresence>
			{activateModal && (
				<S.ModalArea initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					<S.Backdrop />
					<S.Modal>
						<h2>할 일을 모두 삭제하시겠습니까?</h2>
						<p>삭제 후에는 원상복구가 불가능합니다.</p>
						<button onClick={handleDeleteAll}>모두 삭제</button>
						<button onClick={toggleActivetModal}>취소</button>
					</S.Modal>
				</S.ModalArea>
			)}
		</AnimatePresence>
	);
}

export default Modal;
