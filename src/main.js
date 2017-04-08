import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import * as Action from "./action";
/* Actionの実装 */

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
    loops: ["hoge", "fuga", "piyo"],
};

const formReducer = createReducer([], {
    [Action.SEND]: (state, action) => {
        return {...state, value: action.value};
    }
});

const store = createStore(formReducer, initialState);

import Button from "./components/Button/Button.js";

function mapStateToProps(state) {
    return {
        value: state.value,
        loops: state.loops,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onClick(value){
            dispatch(Action.send(value));
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