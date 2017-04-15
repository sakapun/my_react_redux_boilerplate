import React, { PropTypes } from 'react';

const Button = props => (
	<div>
		<button className="Button" onClick={() => { props.addLoops(1); }}>
            aiu {props.value}
		</button>
	</div>
);


Button.propTypes = {
	value: PropTypes.string.isRequired,
	addLoops: PropTypes.func.isRequired,
};

export default Button;
