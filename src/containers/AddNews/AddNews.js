import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { newsActions } from '../../store/rootActions'

import PropTypes from 'prop-types'

import { Form, Input, Button, Upload, Modal } from 'antd'
import { UploadOutlined, InboxOutlined, PlusOutlined } from '@ant-design/icons'
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

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
    })
}

const AddNews = ({ getNews, addNews, editNews }) => {
    const { id: queryId } = useParams()
    const news = getNews(queryId) || {}

    const [form] = Form.useForm()
    const [previewImage, setPreviewImage] = useState(news.src || '')
    const [fileList, setFileList] = useState([])

    const onFinish = (values) => {
        if (queryId) {
            editNews({ ...values, src: previewImage, id: queryId })
        } else {
            addNews({ ...values, src: previewImage })
            setPreviewImage('')
        }

        form.resetFields()
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    const handleChange = async ({ file }) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj)
        }
        setPreviewImage(file.url || file.preview)
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div className="ant-upload-text">Добавить</div>
        </div>
    )

    return (
        <div className={s.AddNewsWrapper}>
            <Form
                {...layout}
                form={form}
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
                    name="title"
                    initialValue={news.title}
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
                    name="descriptions"
                    initialValue={news.descriptions}
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
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleChange}
                    >
                        {previewImage ? null : uploadButton}
                    </Upload>
                    {previewImage && (
                        <img
                            alt="example"
                            style={{ width: '100%' }}
                            src={previewImage}
                        />
                    )}
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
    getNews: (id) => state.news.filter((news) => news.id === Number(id))[0],
})
const mapDispatchToProps = (dispatch) => ({
    addNews: ({ title, descriptions, src }) =>
        dispatch(newsActions.addNews({ title, descriptions, src })),
    editNews: ({ id, title, descriptions, src }) =>
        dispatch(newsActions.editNews({ id, title, descriptions, src })),
})

AddNews.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddNews)
