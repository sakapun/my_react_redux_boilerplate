import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

/* Actionの実装 */

// Action名の定義
const SEND = Symbol("SEND");

// Action Creators
function send(value) {
    return {
        type: SEND,
        value
    };
}

function createReducer (initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}

const initialState = {
    value: "unkouno",
};

const formReducer = createReducer([], {
    [SEND]: (state, action) => {
        return {...state, value: action.value};
    }
});

const store = createStore(formReducer, initialState);

import Button from "./components/Button/Button.js";

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


const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);