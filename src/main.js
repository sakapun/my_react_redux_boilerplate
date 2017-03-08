import React from 'react';
import ReactDOM from 'react-dom';

const Sppan = (props) => {
    return <span>
        eroge
    </span>
}
import Button from './components/Button/Button.js'


ReactDOM.render(
    <div>
        <Button name="unkonko" />
        <Sppan />
    </div>,
    document.getElementById('app')
);