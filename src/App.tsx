import { Provider } from 'react-redux';
import store from './redux/store';
import CalendarPage from './pages/CalendarPage';



const App = () => (
  <Provider store={store}>
    <CalendarPage />
  </Provider>
);

export default App;
