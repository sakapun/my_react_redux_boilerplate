import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { formReducer } from './redux/modules/main';
import App from './containers/main';
import Mountain from './settingArray.json';


const initialState = {
	value: 'yama',
	loops: Mountain,
};

const store = createStore(formReducer, initialState);
const muiTheme = getMuiTheme();

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('app'),
);
