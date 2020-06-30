import { FETCH_LOGIN, SHOW_SPINNER, HIDE_SPINNER } from './actionType'

const initState = {
    isAuth: false,
    isSpinner: false,
    errorMessage: '',
}

export default function authentication(state = initState, action) {
    switch (action.type) {
        case FETCH_LOGIN:
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.authentication,
            }
        case SHOW_SPINNER:
            return {
                ...state,
                isSpinner: true,
            }
        case HIDE_SPINNER:
            return {
                ...state,
                isSpinner: false,
            }
        default:
            return state
    }
}
