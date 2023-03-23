import styled from 'styled-components';

export const AddTodoForm = styled.form`
	position: absolute;
	display: flex;
	width: 320px;
	justify-content: space-between;
	align-items: center;
	bottom: 0;
	padding: 20px 10px;
	box-sizing: border-box;
`;

export const AddInput = styled.input`
	width: 240px;
	height: 30px;
	border-radius: 10px;
	padding: 0 20px;
	box-sizing: border-box;
`;

export const AddButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	color: ${({ theme }) => theme.color};
	span {
		font-size: 36px;
	}
`;
