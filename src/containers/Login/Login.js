import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { fetchLogin } from '../../store/rootActions'

import { Form, Input, Button, Checkbox } from 'antd'
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

const Login = ({ isAuth, fetchLogin }) => {
    if (isAuth) return <Redirect to={{ pathname: '/' }} />

    const onFinish = (values) => {
        console.log('Success:', values)
        fetchLogin(values)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className={s.FormWrapper}>
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
                        Воайти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

Login.propTypes = {}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
    fetchLogin: ({ login, password }) =>
        dispatch(fetchLogin({ login, password })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
