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
