import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const Login = ({ isAuth }) => {
    if (isAuth) return <Redirect to={{ pathname: '/' }} />

    return <div>Login</div>
}

Login.propTypes = {}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
