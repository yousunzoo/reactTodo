import styled from 'styled-components';

export const Button = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	width: 40px;
	height: 40px;
	border-radius: 10px;
	font-size: 0;
	background: url('/assets/theme-icon.jpeg');
	background-size: contain;
`;

export const Dialog = styled.dialog`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	padding: 0;
	border: none;
`;

export const Select = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	width: 60%;
	height: auto;
	margin: auto;
	background-color: white;
`;

export const SelectItem = styled.label`
	display: flex;
	width: 100%;
	height: 60px;
	align-items: center;
	padding: 0 20px;
	box-sizing: border-box;
	border-bottom: 1px solid #eee;
	cursor: pointer;
	&:last-child {
		border: none;
	}

	p {
		margin-top: 2px;
	}
	input[type='checkbox'] {
		display: none;
	}
	input[type='checkbox'] + .checkbox {
		width: 16px;
		height: 16px;
		position: relative;
		border-radius: 50%;
		border: 1px solid #707070;
		margin-right: 10px;
	}
	input[type='checkbox']:checked + .checkbox::before {
		position: absolute;
		display: block;
		content: '';
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #707070;
		top: 3px;
		left: 3px;
	}
`;
