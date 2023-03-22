import React, { useContext } from 'react';
import { UserThemeContext } from '../../App';
import * as S from './style';

function TabList({ toggleActivetModal }) {
	const { userTheme, setUserTheme } = useContext(UserThemeContext);

	const changeTheme = () => {
		setUserTheme(userTheme === 'dark' ? 'light' : 'dark');
	};
	return (
		<S.TabContainer>
			<S.TabButton aria-label='reset todo' onClick={toggleActivetModal}>
				<span className='material-symbols-outlined'>refresh</span>
			</S.TabButton>
			<S.TabButton onClick={changeTheme} aria-label='change theme'>
				<span className='material-symbols-outlined'>{userTheme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
			</S.TabButton>
		</S.TabContainer>
	);
}

export default TabList;
