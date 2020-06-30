import { FETCH_LOGIN } from './actionType'

const initState = {
    isAuth: false,
    errorMessage: null,
}

export default function authentication(state = initState, action) {
    switch (action.type) {
        case FETCH_LOGIN:
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.authentication,
            }
        default:
            return state
    }
}
