import {
	INCREMENT_COUNTER,
	DECREMENT_COUNTER,
	RESET_COUNTER,
	COUNTER_VALUE,
} from '../actions/counterAction';

const initialState = {};

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case COUNTER_VALUE:
			return {
				...state,
				[action.payload.id]: {
					...state[action.payload.id],
					count: action.payload.value,
				},
			};
		case INCREMENT_COUNTER:
			return {
				...state,
				[action.payload]: {
					...state[action.payload],
					count: (state[action.payload]?.count || 0) + 1,
				},
			};
		case DECREMENT_COUNTER:
			return {
				...state,
				[action.payload]: {
					...state[action.payload],
					count: Math.max((state[action.payload]?.count || 0) - 1, 0),
				},
			};
		case RESET_COUNTER:
			return {
				...state,
				count: 0,
			};
		default:
			return state;
	}
};

export default counterReducer;
