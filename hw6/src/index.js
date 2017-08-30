import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, rootElement
);

registerServiceWorker();
