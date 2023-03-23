import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 320px;
	height: 100%;
	background-color: ${({ theme }) => theme.background};
	margin: auto;
	padding: 20px 10px;
	box-sizing: border-box;
`;
