import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd'
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu

const Header = ({ logout }) => {
    const [current, setCurrent] = useState('news')

    const handleClick = (e) => {
        console.log('click ', e)
        setCurrent({ current: e.key })
    }

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="news" icon={<MailOutlined />}>
                <Link to={'/admin-panel/news'}>Просмотр новостей</Link>
            </Menu.Item>
            <Menu.Item key="add" icon={<AppstoreOutlined />}>
                <Link to={'/admin-panel/add'}>Добавить новость</Link>
            </Menu.Item>
            <Menu.Item
                key="logout"
                icon={<AppstoreOutlined />}
                style={{ float: 'right' }}
                onClick={logout}
            >
                <Link to={'/login'}>Выйти</Link>
            </Menu.Item>
        </Menu>
    )
}

export default Header
