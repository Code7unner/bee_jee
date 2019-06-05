import { GET_ERRORS, GET_TASKS, ADD_TASK } from "./types";

export const getTasks = () => {
    return (dispatch) => {
        return fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=admin', {
            method: 'GET'
        })
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

export const addTask = (data) => {
    return (dispatch) => {
        return fetch(`https://uxcandy.com/~shapoval/test-task-backend/create?developer=${data.username}`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({data})
		})
            .then(res => res.json())
            .then(() => dispatch({
                type: ADD_TASK,
                payload: data
            }))
            .catch(err => dispatch({
                type: GET_ERRORS,
                msg: 'Unable to fetch data'
            }))
    }
}