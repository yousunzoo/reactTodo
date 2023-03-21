import styled from 'styled-components';

export const TabContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: right;
`;

export const TabButton = styled.button`
	display: block;
	width: 30px;
	height: 30px;
	margin: 0 6px;
	span {
		color: ${({ theme }) => theme.color};
	}
`;
