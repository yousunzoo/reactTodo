import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0%{
  transform: translateX(-50%) translateY(-50%) rotate(0deg);
}
100% {
  transform: translateX(-50%) translateY(-50%) rotate(360deg);
}
`;
export const Loader = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	animation: ${rotate} 1s linear infinite;
	width: 48px;
	height: 48px;
	box-sizing: border-box;
	border: 5px solid ${({ theme }) => theme.color};
	border-bottom-color: transparent;
	border-radius: 50%;
`;
