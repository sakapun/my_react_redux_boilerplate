import React, { PropTypes } from 'react';

const Mountains = (props) => {
	return <div>
		{props.loops.map((d) => <Mountain {...d} />)}
	</div>;
};
Mountains.propTypes = {
	loops: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const Mountain = (props) => {
	return (<div>
		<span>山の名前:{props.name}</span>
	</div>);
};

Mountain.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Mountains;
