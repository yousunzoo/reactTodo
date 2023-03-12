import styled from 'styled-components';

export const TodoList = styled.ul`
	width: 100%;
	height: 340px;
	overflow-y: scroll;
	padding: 0 20px;
	box-sizing: border-box;
`;

export const TodoLi = styled.li`
	padding: 10px 0;
	border-bottom: 2px dotted black;
	input {
		margin-right: 20px;
	}
	.todoText {
		font-size: 20px;
	}
`;
