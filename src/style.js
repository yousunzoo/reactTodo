import styled from 'styled-components';

export const Body = styled.div`
	position: relative;
	width: 100%;
	padding: 100px;
	box-sizing: border-box;
	height: 100vh;
	background-color: ${({ theme }) => theme.background};
	transition: all 0.1s ease-in;
`;
