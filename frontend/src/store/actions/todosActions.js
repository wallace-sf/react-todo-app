import axios from 'axios'

const url = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const refresh = (description = '', filter) => {
    return dispatch => {
        const search = description && filter ? 
            `&description__regex=/${description}/` : '';

        axios.get(`${url}?sort=-createdAt${search}`)
            .then(res => dispatch({
                type: 'TODO_REFRESHED',
                payload: { res, description, filter }
            }));
    }
}

export const search = (description) => {
    return dispatch => dispatch(refresh(description, true))
}

export const add = (description) => {
    return dispatch => {
        axios.post(url, { description })
            .then(res => dispatch({
                type: 'TODO_ADDED',
                payload: res.data
            }))
            .then(res => dispatch(refresh()))
    }
}

export const markAsDone = (todo, done, description, filter) => {
    return dispatch => {
        axios.put(`${url}/${todo._id}`, { done })
            .then(res => dispatch(refresh(description, filter)))
    }
}

export const remove = (todo, description, filter) => {
    return dispatch => {
        axios.delete(`${url}/${todo._id}`)
            .then(res => dispatch(refresh(description, filter)))
    }
}

export const clear = () => {
    return dispatch => dispatch(refresh('', false))
}