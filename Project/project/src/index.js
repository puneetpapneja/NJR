import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { UserProvider } from './UserContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <switch>
  <Provider store={store}>
  <UserProvider> {/* Wrap your App with UserProvider */}
      <App />
    </UserProvider>
  </Provider>,
  </switch>,
  document.getElementById('root')
);

reportWebVitals();
