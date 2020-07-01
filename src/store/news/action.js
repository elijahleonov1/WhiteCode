import { DELETE_NEWS, ADD_NEWS, EDIT_NEWS } from './actionType'

export const deleteNews = (id) => (dispatch) => {
    dispatch({ type: DELETE_NEWS, payload: { id } })
}

export const addNews = (news) => (dispatch) => {
    dispatch({ type: ADD_NEWS, payload: news })
}
export const editNews = (news) => (dispatch) => {
    dispatch({ type: EDIT_NEWS, payload: news })
}
