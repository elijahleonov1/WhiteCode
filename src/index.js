import React from 'react'
import ReactDOM from 'react-dom'

import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/rootReducer'

import { composeWithDevTools } from 'redux-devtools-extension'

import './assets/styles/index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory()

const store = createStore(
    rootReducer(history),
    compose(
        composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
    )
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
