import './../src/App.css';
import 'regenerator-runtime/runtime';
import HomePage from './HomePage.jsx';
import configureStore from './redux/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <Provider store={configureStore}>
        <HomePage></HomePage>
      </Provider>
    </div>
  );
}

export default App;


