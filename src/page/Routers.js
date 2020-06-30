import React from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'
import PrivateRouter from './PrivateRouter'
import App from '../App'

const Routers = ({ isAuth }) => {
    return (
        <Router>
            <Switch>
                <Route path={'/login'} render={() => <div>login</div>} />

                <PrivateRouter
                    exact
                    isAuth={isAuth}
                    path={'/'}
                    render={() => <App />}
                />
                <PrivateRouter
                    isAuth={isAuth}
                    path={'/test'}
                    render={() => <div>test</div>}
                />
            </Switch>

            <Route render={() => <div>not found</div>} />
        </Router>
    )
}

const mapStateToProps = (state) => ({
    isAuth: (state) => state.isAuth,
})

export default connect(mapStateToProps, null)(Routers)
