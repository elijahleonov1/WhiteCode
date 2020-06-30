import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'
import PrivateRouter from './PrivateRouter'
import App from '../App'
import Login from '../containers/Login'

const Routers = ({ isAuth }) => {
    return (
        <Router>
            <Switch>
                <Route path={'/login'} render={() => <Login />} />

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

                <Route render={() => <div>not found</div>} />
            </Switch>
        </Router>
    )
}

const mapStateToProps = (state) => ({
    isAuth: false,
})

Routers.propTypes = {
    isAuth: PropTypes.bool,
}

export default connect(mapStateToProps, null)(Routers)
