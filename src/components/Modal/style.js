import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalArea = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
export const Backdrop = styled(motion.div)`
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.2;
`;
export const Modal = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	width: 360px;
	height: 220px;
	background-color: white;
	color: black;
	text-align: center;
	padding: 50px;
	box-sizing: border-box;
	h2 {
		font-size: 20px;
		margin-bottom: 30px;
	}
	p {
		margin-bottom: 30px;
	}
	button {
		display: inline-block;
		width: 100px;
		height: 30px;
		line-height: 24px;
		margin: 0 15px;
		border-radius: 4px;
		border: 3px solid transparent;
		background-color: black;
		color: white;
		transition: all 0.2s ease-in;
		&:hover {
			background-color: white;
			color: black;
			border-color: black;
		}
	}
`;
