import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { createReducer } from 'redux-create-reducer';
import * as Action from './action';
import Button from './components/Button/Button';
/* Actionの実装 */


const initialState = {
	value: 'unkouno',
	loops: ['hoge', 'fuga', 'piyo'],
};

const formReducer = createReducer(initialState, {
	[Action.SEND]: (state, action) => { return { ...state, value: action.value }; },
});

const store = createStore(formReducer, initialState);

function mapStateToProps(state) {
	return {
		value: state.value,
		loops: state.loops,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		onClick(value) {
			dispatch(Action.send(value));
		},
	};
}

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Button);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('app'),
);
