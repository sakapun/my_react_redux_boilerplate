import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// hmrに対応させるため、ここで読み込む
import './main.css';

import { formReducer } from './redux/modules/main';
import App from './containers/main';
import Mountain from './settingArray.json';

injectTapEventPlugin();

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
