import { FETCH_LOGIN } from './actionType'
import api from '@api'

export const fetchLogin = ({ login, password }) => async (dispatch) => {
    const data = await api.login({ login, password })
    dispatch({
        type: FETCH_LOGIN,
        payload: data,
    })
}
