import { DELETE_NEWS, ADD_NEWS, EDIT_NEWS } from './actionType'

const initialState = [
    {
        id: 0,
        title: 'title',
        src: '#',
        editDate: null,
        descriptions: '',
    },
]

export default function news(state = initialState, action) {
    switch (action.type) {
        case ADD_NEWS:
            return addNews(state, action.payload)
        case EDIT_NEWS:
            return editNews(state, action.payload)
        case DELETE_NEWS:
            return deleteNews(state, action.payload.id)
        default:
            return state
    }
}

export const deleteNews = (state, id) => {
    return [...state.filter((item) => item.id !== id)]
}

export const addNews = (state, news) => {
    const newsId = state.length
    return [
        ...state,
        {
            ...news,
            id: newsId,
            editDate: new Date().toISOString(),
        },
    ]
}

export const editNews = (state, news) => {
    const id = Number(news.id)
    const oldNews = deleteNews(state, id)
    return [
        ...oldNews,
        {
            ...news,
            id,
            editDate: new Date().toISOString(),
        },
    ]
}
