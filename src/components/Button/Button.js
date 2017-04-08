import React, {PropTypes} from 'react';

export default class Button extends React.Component {
    render(){
        return <button className="Button">
            aiu {this.props.value}
        </button>
    }
}

// const Button = (props) => {
//     return <button className="Button">
//     aiu {props.name}
//     </button>
// }

Button.propTypes = {
    value: PropTypes.string
}
// export default Button;