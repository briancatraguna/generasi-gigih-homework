import './../src/App.css';
import 'regenerator-runtime/runtime';
import HomePage from './pages/HomePage.jsx';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={configureStore}>
          <HomePage></HomePage>
        </Provider>
      </div>
    </Router>
    
  );
}

export default App;


