import React from 'react'
import ReactDOM from 'react-dom'

import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/rootReducer'

import { composeWithDevTools } from 'redux-devtools-extension'

import Routers from './page/Routers'

import 'antd/dist/antd.css'
import './assets/styles/index.scss'

import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
    enhancers.push(composeWithDevTools())
}

const store = createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routers />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
