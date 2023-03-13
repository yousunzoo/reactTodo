import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import SwitchTheme from './components/SwitchTheme';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import * as S from './style';
import Board from './components/Board';

export const UserThemeContext = createContext();

function App() {
	const [isDark, setIsDark] = useState(false);
	return (
		<ThemeProvider theme={isDark ? theme.dark : theme.light}>
			<GlobalStyle />
			<S.Body className='App'>
				<UserThemeContext.Provider value={{ isDark, setIsDark }}>
					<SwitchTheme />
				</UserThemeContext.Provider>
				<Board />
			</S.Body>
		</ThemeProvider>
	);
}

export default App;
