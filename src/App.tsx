import { ThemeProvider } from 'styled-components';
import { Home } from './pages/home/home.page';
import { BaseTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
