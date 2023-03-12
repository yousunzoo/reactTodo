import styled from 'styled-components';

export const AddTodo = styled.div`
	width: 90%;
	min-width: 600px;
	margin: auto;
	padding: 20px 100px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
`;
export const Input = styled.input`
	width: 85%;
	height: 40px;
	border: none;
	padding: 0 20px;
	box-sizing: border-box;
	&:focus {
		outline: none;
	}
	&.noText::placeholder {
		color: ${({ theme }) => theme.addButton};
	}
`;

export const Button = styled.button`
	width: 42px;
	height: 40px;
	border: 2px solid ${({ theme }) => theme.addButton};
	background-color: ${({ theme }) => theme.addButton};
	color: ${({ theme }) => theme.addButtonText};
	border-radius: 10px;
	transition: all 0.2s ease-in;
	&:hover {
		background-color: transparent;
		color: ${({ theme }) => theme.addButton};
	}
`;
