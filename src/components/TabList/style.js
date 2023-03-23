import styled from 'styled-components';

export const TabContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: right;
	padding: 8px;
	box-sizing: border-box;
`;

export const TabButton = styled.button`
	display: flex;
	width: 30px;
	height: 30px;
	justify-content: center;
	align-items: center;
	margin-left: 6px;
	span {
		color: ${({ theme }) => theme.color};
	}
`;
