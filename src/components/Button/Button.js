import React from 'react';

// export default class Button extends React.Component {
//     render(){
//         return <button className="Button">
//             aiu {this.props.name}
//         </button>
//     }
// }

const Button = (props) =>
{
    return <button className="Button">
    aiu {props.name}
    </button>
}

export default Button;