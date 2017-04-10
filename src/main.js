import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { formReducer } from './redux/modules/main';
import App from './containers/main';
import Mountain from './settingArray.json';


const initialState = {
	value: 'unkouno',
	loops: Mountain,
};

const store = createStore(formReducer, initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app'),
);
