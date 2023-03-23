import styled from 'styled-components';

export const TodoLi = styled.li`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: baseline;
	height: 30px;
	padding: 0 10px;
	box-sizing: border-box;
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
	width: 160px;
	&.done {
		text-decoration: line-through;
	}
	&:disabled {
		background-color: transparent;
		color: inherit;
	}
`;
export const EditButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.color};
	width: 30px;
	height: 30px;
	margin-left: auto;
`;

export const DeleteButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.color};
	width: 30px;
	height: 30px;
	margin-left: 6px;
`;
