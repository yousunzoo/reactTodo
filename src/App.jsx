import { ThemeProvider } from 'styled-components';
import Calendar from './components/Calender';
import TodoList from './components/TodoList';
import GlobalStyle from './styles/globalStyle';
import { Container } from './styles/style';
import theme from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Container>
				<Calendar />
				<TodoList />
			</Container>
		</ThemeProvider>
	);
}

export default App;
