import {INC, DEC, RESET, FILTER} from '../actions/types';

const counterReducer = (state = {counter: 0, prevCounters: []}, action) => {
	switch (action.type) {
		case INC:
			return {...state, counter: state.counter + 1, prevCounters: state.prevCounters.concat(state.counter)}
		case DEC:
			return {...state, counter: state.counter - 1, prevCounters: state.prevCounters.concat(state.counter)}
		case RESET:
			return {...state, counter: 0, prevCounters: []}
		case FILTER:
			return {...state, prevCounters: [...new Set(state.prevCounters)]}
		default:
			return state;
	}
};

export default counterReducer;
