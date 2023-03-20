import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Calendar from './components/Calender';
import SwitchButton from './components/SwitchButton/SwitchButton';
import TodoList from './components/TodoList';
import GlobalStyle from './styles/globalStyle';
import { Container } from './styles/style';
import theme from './styles/theme';

export const UserThemeContext = createContext();
function App() {
	const [userTheme, setUserTheme] = useState('springTheme');
	return (
		<ThemeProvider theme={theme[userTheme]}>
			<UserThemeContext.Provider value={{ userTheme, setUserTheme }}>
				<GlobalStyle />
				<Container>
					<SwitchButton />
					<Calendar />
					<TodoList />
				</Container>
			</UserThemeContext.Provider>
		</ThemeProvider>
	);
}

export default App;
