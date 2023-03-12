import styled from 'styled-components';

export const Body = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.background};
	transition: all 0.1s ease-in;
`;
