import { GET_ERRORS, GET_TASKS, TASK_LOADING } from "./types";

export const getTasks = () => {
    // dispatch(setTaskLoading());
    return (dispatch) => {
        console.log('GET response: ');
        return fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=admin')
            .then(res => res.json())
            .then(json => dispatch({
                type: GET_TASKS,
                payload: json
            }))
            .catch(err => dispatch({
                type: GET_ERRORS,
                msg: 'Unable to fetch data'
            }))
    }
}

// Set loading state
export const setTaskLoading = () => {
    return {
        type: TASK_LOADING
    };
};
