import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import TodoContainer from './components/TodoContainer';
import GlobalStyle from './styles/globalStyle';
import { Container } from './styles/style';
import theme from './styles/theme';

export const UserThemeContext = createContext();
function App() {
	const [userTheme, setUserTheme] = useState('dark');
	return (
		<ThemeProvider theme={theme[userTheme]}>
			<UserThemeContext.Provider value={{ userTheme, setUserTheme }}>
				<GlobalStyle />
				<Container>
					<TodoContainer />
				</Container>
			</UserThemeContext.Provider>
		</ThemeProvider>
	);
}

export default App;
