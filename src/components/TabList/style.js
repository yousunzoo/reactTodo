import styled from 'styled-components';

export const TabContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: right;
	padding: 8px;
	box-sizing: border-box;
`;

export const TabButton = styled.button`
	display: block;
	width: 30px;
	height: 30px;
	margin-left: 6px;
	span {
		color: ${({ theme }) => theme.color};
	}
`;
