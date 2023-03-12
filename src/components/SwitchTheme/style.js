import styled from 'styled-components';

export const Button = styled.button`
	position: absolute;
	top: 50px;
	left: 50px;
	width: 50px;
	height: 50px;
	font-size: 20px;
	border-radius: 12px;
	background-color: ${({ theme }) => theme.switchButton};
	transition: all 0.2s ease-in;
	&:hover {
		background-color: ${({ theme }) => theme.switchButtonHover};
	}
`;
