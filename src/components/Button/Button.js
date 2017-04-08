import React, {PropTypes} from 'react';

export default class Button extends React.Component {
    render(){
        return <div>
            <button className="Button">
                aiu {this.props.value}
            </button>
            {this.props.loops.map((d) => {
                return <div>{d}</div>;
            })}
        </div>;
    }
}

Button.propTypes = {
    value: PropTypes.string,
    loops: PropTypes.array
};