import styled from 'styled-components';

export const TodoList = styled.ul`
	width: 100%;
	height: 340px;
	overflow-y: scroll;
	padding: 0 40px;
	box-sizing: border-box;
`;

export const TodoLi = styled.li`
	display: flex;
	width: 100%;
	padding: 10px 0;
	justify-content: space-between;
	border-bottom: 2px dotted black;
	.todoText {
		font-size: 20px;
		width: 80%;
	}
	.deleteTodo {
		border: 2px solid ${({ theme }) => theme.delete};
		border-radius: 6px;
		color: ${({ theme }) => theme.delete};
	}
`;
