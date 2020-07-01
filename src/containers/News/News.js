import React from 'react'
import { connect } from 'react-redux'
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

const News = ({ news }) => {
    const CardNews = (...props) => (
        <Card
            {...props}
            style={{ width: 300, margin: 5 }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <DeleteOutlined key="delete" />,
                <EditOutlined key="edit" />,
            ]}
        >
            <Meta
                avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
            />
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
const mapDispatchToProps = (dispatch) => ({})

News.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(News)
