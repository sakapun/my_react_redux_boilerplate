import React, { PropTypes } from 'react';

const Mountains = props => (
	<div className="container">
		{props.loops.map(d => <Mountain key={d.code} {...d} />)}
	</div>
);
Mountains.propTypes = {
	loops: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Mountain = props => (
	<div className="col-xs-4 parts-mountain">
		<span>山の名前:{props.name}</span>
	</div>
);

Mountain.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Mountains;
