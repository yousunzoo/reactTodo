import React, { useContext } from 'react';
import { UserThemeContext } from '../../App';
import * as S from './style';
import { themes } from './themeArr';

function SwitchModal({ modal }) {
	const { userTheme, setUserTheme } = useContext(UserThemeContext);
	const onChange = (e) => {
		setUserTheme(e.target.name);
		modal.current.close();
	};
	return (
		<S.Dialog ref={modal}>
			<S.Select>
				{themes.map((theme) => (
					<S.SelectItem key={theme.id}>
						<input type='checkbox' checked={userTheme == theme.id ? true : false} name={theme.id} onChange={onChange} />
						<div className='checkbox'></div>
						<p>{theme.text}</p>
					</S.SelectItem>
				))}
			</S.Select>
		</S.Dialog>
	);
}

export default SwitchModal;
