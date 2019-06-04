import { GET_TASKS, GET_ERRORS } from '../actions/types';

const initialState = {
	task: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_TASKS:
			return {
				...state,
				task: action.payload
			};
		case GET_ERRORS:
			return {
				...state,
				error: action.msg 
			}
		default :
			return state;
	}
}