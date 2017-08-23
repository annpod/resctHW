import React from 'react';
import ReactDOM from 'react-dom';
import {
   BrowserRouter as Router,
   Route,
   Link
} from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './services/registerServiceWorker';


const render = Component => {
	ReactDOM.render(
		<Router>
			<Component />
		</Router>
		, document.getElementById('root'));
};

if (module.hot) {
	module.hot.accept('./App', () => {
		render(App);
	});
}
render(App);

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
