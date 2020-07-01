import { DELETE_NEWS, ADD_NEWS } from './actionType'

const initialState = [
    {
        id: 0,
        title: 'title',
        src: '#',
        editDate: null,
        descriptions: '',
    },
    {
        id: 1,
        title: 'title',
        src: '#',
        editDate: null,
        descriptions: '',
    },
    {
        id: 2,
        title: 'title',
        src: '#',
        editDate: null,
        descriptions: '',
    },
    {
        id: 3,
        title: 'title',
        src: '#',
        editDate: null,
        descriptions: 'asdasdasdasd',
    },
]

export default function news(state = initialState, action) {
    switch (action.type) {
        case ADD_NEWS:
            return addNews(state, action.payload)
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
