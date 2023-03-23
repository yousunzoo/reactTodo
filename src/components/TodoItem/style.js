import styled from 'styled-components';

export const TodoLi = styled.li`
	width: 410px;
	display: flex;
	align-items: center;
	justify-content: baseline;
	height: 30px;
	margin-bottom: 10px;
	font-size: 18px;
`;

export const Checkbox = styled.label`
	cursor: pointer;
	margin-right: 10px;
	input[type='checkbox'] {
		display: none;
	}
`;
export const TodoTitle = styled.input`
	position: relative;
	display: block;
	font-size: 18px;
	&.done {
		text-decoration: line-through;
	}
	&:disabled {
		background-color: transparent;
		color: inherit;
	}
`;
export const EditButton = styled.button`
	color: ${({ theme }) => theme.color};
	margin-left: auto;
`;

export const DeleteButton = styled.button`
	width: 40px;
	display: block;
	background-color: red;
	margin-left: 10px;
	border-radius: 20px 0 0 20px;
	span {
		margin-left: 4px;
	}
`;
