import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Main from '../redux/modules/main';

// components
import Button from '../components/Button/Button';
import Mountain from '../components/Mountain';

class App extends React.Component {
	render() {
		return (<div>
			<Button {...this.props} />
			{this.props.loops.map((d) => <Mountain {...d} />)}
		</div>);
	}
}

App.propTypes = {
	loops: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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

