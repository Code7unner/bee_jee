import { GET_TASKS, GET_ERRORS, ADD_TASK } from '../actions/types';

const initialState = {
	task: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_TASKS:
			return {
				...state,
				task: action.payload
			};
		case ADD_TASK:
			return {
				...state,
				task: [action.payload, ...state.task]
			};
		case GET_ERRORS:
			return {
				...state,
				error: action.msg 
			};
		default :
			return state;
	}
}