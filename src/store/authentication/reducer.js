import utils from '@utils'
import {
    FETCH_LOGIN,
    SHOW_SPINNER,
    HIDE_SPINNER,
    IS_AUTH_REDUX,
} from './actionType'

const isAuth = !!utils.loadFromLocalStorege(IS_AUTH_REDUX)

const initState = {
    isAuth,
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
