import React from 'react'
import { connect } from 'react-redux'
import { newsActions } from '../../store/rootActions'

import PropTypes from 'prop-types'

import { Form, Input, Button, Upload } from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'
import s from './AddNews.module.scss'

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

const AddNews = ({}) => {
    const onFinish = (values) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }
    const normFile = (e) => {
        console.log('Upload event:', e)

        if (Array.isArray(e)) {
            return e
        }

        return e && e.fileList
    }
    return (
        <div className={s.AddNewsWrapper}>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{ width: '100%' }}
            >
                <Form.Item
                    label="Заголовок"
                    name="Title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Описание"
                    name="descriptors"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item label="Картинка">
                    <Form.Item
                        name="dragger"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        noStyle
                    >
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    news: state.news,
})
const mapDispatchToProps = (dispatch) => ({})

AddNews.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddNews)
