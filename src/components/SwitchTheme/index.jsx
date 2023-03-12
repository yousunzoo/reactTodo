import React, { useContext } from 'react';
import { UserThemeContext } from '../../App';
import * as S from './style';

function SwitchTheme({ onClick }) {
	const { isDark, setIsDark } = useContext(UserThemeContext);
	return (
		<S.Button
			onClick={() => {
				setIsDark(!isDark);
			}}>
			{isDark ? '🌚' : '🌞'}
		</S.Button>
	);
}

export default SwitchTheme;
