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
import App from '../App'
import Login from '../containers/Login'

const Routers = ({ isAuth }) => {
    return (
        <Router>
            <Switch>
                <Route path={'/login'} render={() => <Login />} />

                <PrivateRoute
                    exact
                    isAuth={isAuth}
                    path={'/'}
                    render={() => <App />}
                />

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
