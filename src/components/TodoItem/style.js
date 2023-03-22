import styled from 'styled-components';

export const TodoLi = styled.li`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: baseline;
	height: 30px;
	margin-bottom: 10px;
	font-size: 18px;
	.todo-title {
		position: relative;
		padding: 0 2px;
		&::after {
			position: absolute;
			display: block;
			content: '';
			top: 6px;
			left: 0;
			width: 0;
			height: 1px;
			background-color: ${({ theme }) => theme.color};
			transition: all 0.2s ease-in;
		}
		&.activated::after {
			width: 100%;
		}
	}
`;

export const Checkbox = styled.label`
	cursor: pointer;
	margin-right: 10px;
	input[type='checkbox'] {
		display: none;
	}
`;

export const DragButton = styled.button`
	color: ${({ theme }) => theme.color};
	margin-left: auto;
`;
