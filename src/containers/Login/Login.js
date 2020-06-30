import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { authActions } from '../../store/rootActions'

import { Form, Input, Button, Checkbox, Spin, Alert } from 'antd'
import s from './Login.module.scss'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
}

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
}

const Login = ({ isAuth, isSpinner, errorMessage, fetchLogin, showSpnner }) => {
    const onFinish = (values) => {
        showSpnner()
        fetchLogin(values)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    if (isAuth) return <Redirect to={{ pathname: '/' }} />

    return (
        <>
            {errorMessage.length > 0 && !isSpinner && (
                <div className={s.Alert}>
                    <Alert
                        message={errorMessage}
                        type="error"
                        closable
                        style={{ widtch: '500px' }}
                    />
                </div>
            )}
            <div className={s.FormWrapper}>
                <Spin spinning={isSpinner} delay={500}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="E-mail"
                            name="login"
                            rules={[
                                {
                                    required: true,
                                    type: 'email',
                                    message: 'некорректный e-mail',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Пароль"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста введите пароль!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
        </>
    )
}

Login.propTypes = {}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isSpinner: state.auth.isSpinner,
    errorMessage: state.auth.errorMessage,
})

const mapDispatchToProps = (dispatch) => ({
    showSpnner: () => dispatch(authActions.showSpnner()),
    fetchLogin: ({ login, password }) =>
        dispatch(authActions.fetchLogin({ login, password })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
