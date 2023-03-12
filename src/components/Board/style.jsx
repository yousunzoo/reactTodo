import styled from 'styled-components';

export const BoardArea = styled.div`
	display: block;
	width: 60%;
	margin: auto;
`;

export const H1 = styled.h1`
	text-align: center;
	font-size: 24px;
	padding: 20px 0;
	background-color: ${({ theme }) => theme.title};
`;

export const Board = styled.div`
	width: 100%;
	height: 540px;
	background-color: ${({ theme }) => theme.board};
	transition: all 0.2s ease-in;
`;
