import React from 'react'
import { connect } from 'react-redux'

import { authActions } from '../store/rootActions'
import { createBrowserHistory } from 'history'
import PropTypes from 'prop-types'

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    browserHistory,
} from 'react-router-dom'

import utils from '@utils'

import Login from '../containers/Login'
import Header from '../components/Header'
import News from '../containers/News'
import AddNews from '../containers/AddNews'

const Routers = ({ isAuth, logout }) => {
    const handleLogout = () => {
        logout()
    }

    return (
        <Router>
            {!isAuth && <Redirect to="/login" />}

            <Switch>
                <Redirect exact from="/" to="/admin-panel/news" />

                <Route path={'/admin-panel'}>
                    <Header logout={handleLogout} />
                    <Switch>
                        <Route
                            path={'/admin-panel/news'}
                            render={() => <News />}
                        />
                        <Route
                            path={'/admin-panel/add'}
                            render={() => <AddNews />}
                        />
                        <Route render={() => <div>not found</div>} />
                    </Switch>
                </Route>

                <Route path={'/login'} render={() => <Login />} />
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
