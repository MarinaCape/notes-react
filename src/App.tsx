import { Home } from './pages/home/home.page';
import { Provider } from 'react-redux';
import { store } from './store/root.store';

function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

export default App;
