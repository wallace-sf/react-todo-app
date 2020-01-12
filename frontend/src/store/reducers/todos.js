const INITIAL_STATE = { description: '', list: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_REFRESHED':
            return {
                ...state,
                list: action.payload.res.data,
                description: action.payload.description,
                filter: action.payload.filter
            }
        case 'TODO_ADDED':
            return { ...state, description: INITIAL_STATE.description }
        default:
            return state
    }
}