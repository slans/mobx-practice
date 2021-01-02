import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import todoStore from './store/todo-store';
// import { IconContext } from 'react-icons';

ReactDOM.render(
	<Provider todoStore={todoStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
