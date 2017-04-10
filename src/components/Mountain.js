import React, { PropTypes } from 'react';

const Mountain = (props) => {
	return (<div>
		<span>山の名前:{props.name}</span>
	</div>);
};

Mountain.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Mountain;
