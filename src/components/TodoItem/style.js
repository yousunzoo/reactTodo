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
	color: ${({ theme }) => theme.color};
	width: 30px;
	margin-left: auto;
`;

export const DeleteButton = styled.button`
	color: ${({ theme }) => theme.color};
	width: 30px;
	display: block;
	border-radius: 20px 0 0 20px;
	span {
		font-size: 22px;
		margin-left: 4px;
	}
`;
