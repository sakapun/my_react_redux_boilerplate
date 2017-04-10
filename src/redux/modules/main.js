import { createReducer } from 'redux-create-reducer';

// Action
export const SEND = Symbol('SEND');
export function add(value) {
	return {
		type: SEND,
		value,
	};
}

// Reducer
export const formReducer = createReducer([], {
	[SEND]: (state, action) => { return { ...state, loops: [...state.loops, { name: action.value }] }; },
});
