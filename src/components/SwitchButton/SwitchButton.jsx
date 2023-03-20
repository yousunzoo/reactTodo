import React, { useRef, useState } from 'react';
import * as S from './style';
import SwitchModal from './SwitchModal';
function SwitchButton() {
	const modal = useRef();
	const onClick = () => {
		modal.current.show();
	};
	return (
		<>
			<S.Button onClick={onClick}>테마 선택</S.Button>
			<SwitchModal modal={modal} />
		</>
	);
}

export default SwitchButton;
