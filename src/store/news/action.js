import { DELETE_NEWS } from './actionType'

export const deleteNews = (id) => (dispatch) => {
    dispatch({ type: DELETE_NEWS, payload: { id } })
}
