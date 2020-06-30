import React from 'react'
import { connect } from 'react-redux'

import { authActions } from '../store/rootActions'

import PropTypes from 'prop-types'

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    useHistory,
    useLocation,
} from 'react-router-dom'

import utils from '@utils'

import PrivateRoute from './PrivateRoute'
import Login from '../containers/Login'
import Header from '../components/Header'

const Routers = ({ isAuth, logout }) => {
    const handleLogout = () => {
        logout()
    }
    console.log(isAuth)
    return (
        <Router>
            <Route path={'/login'} render={() => <Login />} />
            <PrivateRoute render={() => <div>not found</div>} />

            <Switch>
                <PrivateRoute exact isAuth={isAuth} path={'/'}>
                    <Header logout={handleLogout} />
                    <Route path={'/news'} render={() => <div>news</div>} />
                </PrivateRoute>
            </Switch>
        </Router>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(authActions.logout()),
})

Routers.propTypes = {
    isAuth: PropTypes.bool,
    logout: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Routers)
