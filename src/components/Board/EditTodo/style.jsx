import styled from 'styled-components';

export const EditTodoArea = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
`;

export const Modal = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const EditTodo = styled.div`
	position: absolute;
	width: 50%;
	height: 400px;
	flex-wrap: wrap;
	top: 50%;
	left: 50%;
	background-color: white;
	transform: translateX(-50%) translateY(-50%);

	h2 {
		width: 100%;
		height: 50px;
		text-align: center;
		font-size: 24px;
		margin: 100px 0 50px;
	}
`;

export const EditArea = styled.div`
	width: 100%;
	height: 30px;
	padding: 0 50px;
	text-align: center;
	box-sizing: border-box;
	input {
		border: none;
		text-align: center;
		border-bottom: 1px solid black;
		width: 100%;
		height: 40px;
		font-size: 20px;
		padding: 20px 0;
		box-sizing: border-box;
	}
	button {
		display: flex;
		width: 100px;
		height: 40px;
		justify-content: center;
		align-items: center;
		margin: auto;
		border: 2px solid ${({ theme }) => theme.addButton};
		color: ${({ theme }) => theme.addButton};
		border-radius: 10px;
		margin-top: 50px;
	}
`;
