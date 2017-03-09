import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

/* Actionの実装 */

// Action名の定義

const initialState = {
    value: null,
}

const store = createStore(formReducer, initialState);

store.dispatch(actionCreators());

store.subscribe(() => {
    store.getState();
});


const Spaan = (props) => {
    return <span>
        eroge
    </span>
}
import Button from './components/Button/Button.js'

function mapStateToProps(state) {
    return {
        value: state.value,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onClick(value){
            dispatch(send(value));
        },
    };
}


const AppContrainer = connect(

)(Button);

ReactDOM.render(
    <div>
        <Button name="unkonko" />
        <Spaan />
    </div>,
    document.getElementById('app')
);