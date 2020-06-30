import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ children, component: Component, isAuth, ...res }) => {
    const render =
        res.render && typeof res.render === 'function' ? res.render : null
    return (
        <Route
            {...res}
            render={(props) => {
                return isAuth ? (
                    render ? (
                        <Route {...props} render={render} />
                    ) : (
                        <Component {...props} />
                    )
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.loction },
                        }}
                    />
                )
            }}
        >
            {children}
        </Route>
    )
}

PrivateRoute.propTupes = {
    component: PropTypes.element,
    children: PropTypes.element,
    isAuth: PropTypes.bool,
}

export default PrivateRoute
