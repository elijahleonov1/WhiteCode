import { DELETE_NEWS, ADD_NEWS } from './actionType'

export const deleteNews = (id) => (dispatch) => {
    dispatch({ type: DELETE_NEWS, payload: { id } })
}

export const AddNews = (news) => (dispatch) => {
    dispatch({ type: ADD_NEWS, payload: news })
}
