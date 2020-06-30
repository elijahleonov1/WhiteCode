import { FETCH_LOGIN, SHOW_SPINNER, HIDE_SPINNER, LOGOUT } from './actionType'

import api from '@api'

export const fetchLogin = ({ login, password }) => async (dispatch) => {
    const data = await api.login({ login, password })
    dispatch({
        type: FETCH_LOGIN,
        payload: data,
    })
    dispatch({ type: HIDE_SPINNER })
}

export const showSpnner = () => (dispatch) => dispatch({ type: SHOW_SPINNER })
export const hideSpnner = () => (dispatch) => dispatch({ type: HIDE_SPINNER })
export const logout = () => (dispatch) => dispatch({ type: LOGOUT })
