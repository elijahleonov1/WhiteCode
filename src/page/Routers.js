import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from '../containers/Login'
import Header from '../components/Header'

const Routers = ({ isAuth }) => {
    return (
        <Router>
            <Switch>
                <PrivateRoute isAuth={isAuth} path={'/'}>
                    <Header />
                    <Route path={'/test'} render={() => <div>132213</div>} />
                </PrivateRoute>

                <Route path={'/login'} render={() => <Login />} />
                <Route render={() => <div>not found</div>} />
            </Switch>
        </Router>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

Routers.propTypes = {
    isAuth: PropTypes.bool,
}

export default connect(mapStateToProps, null)(Routers)
