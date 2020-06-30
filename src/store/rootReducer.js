import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import authentication from './authentication/reducer'

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        auth: authentication,
    })
