import React, { useContext } from 'react';
import { UserThemeContext } from '../../App';
import { Button } from '../style';

function SwitchTheme({ onClick }) {
	const { isDark, setIsDark } = useContext(UserThemeContext);
	return (
		<Button
			onClick={() => {
				setIsDark(!isDark);
			}}>
			{isDark ? '🌚' : '🌞'}
		</Button>
	);
}

export default SwitchTheme;
