import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import * as Main from '../redux/modules/main';
// components

import Button from '../components/Button/Button';
import Mountains from '../components/Mountain/Mountain';

function App(props) {
	return (
		<div>
			<AppBar title="My AppBar" />
			<h1>Material-UI</h1>
			<Button {...props} />
			<Mountains {...props} />
		</div>
	);
}

function mapStateToProps(state) {
	return {
		value: state.value,
		loops: state.loops,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		addLoops(value) {
			dispatch(Main.add(value));
		},
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);

