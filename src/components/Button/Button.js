import React, { PropTypes } from 'react';

export default class Button extends React.Component {
    render() {
        return <div>
            <button className="Button" onClick={() => { this.props.addLoops(1); }}>
                aiu {this.props.value}
            </button>
        </div>;
    }
}

Button.propTypes = {
	value: PropTypes.string,
	addLoops: PropTypes.func,
};
