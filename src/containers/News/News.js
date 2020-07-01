import React from 'react'
import { connect } from 'react-redux'
import { newsActions } from '../../store/rootActions'

import PropTypes from 'prop-types'

import { Card, Avatar } from 'antd'
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
    DeleteOutlined,
} from '@ant-design/icons'

import s from './News.module.scss'

const { Meta } = Card

const News = ({ news, deleteNews }) => {
    const handleDeleteNews = (id) => {
        deleteNews(id)
    }

    const CardNews = ({ data }) => (
        <Card
            style={{ width: 300, margin: 5 }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <DeleteOutlined
                    key="delete"
                    onClick={() => handleDeleteNews(data.id)}
                />,
                <EditOutlined key="edit" />,
            ]}
        >
            <Meta title="Card title" description="This is the description" />
        </Card>
    )
    return (
        <div className={s.NewsWrapper}>
            {news.map((item, idx) => (
                <CardNews key={item.id} data={item} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    news: state.news,
})
const mapDispatchToProps = (dispatch) => ({
    deleteNews: (id) => dispatch(newsActions.deleteNews(id)),
})

News.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(News)
