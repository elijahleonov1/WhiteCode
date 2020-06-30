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
                <Link to={'/news'}>Просмотр новостей</Link>
            </Menu.Item>
            <Menu.Item key="edit" icon={<AppstoreOutlined />}>
                <Link to={'/edit'}>Редактор новостей</Link>
            </Menu.Item>
            <Menu.Item
                key="logout"
                icon={<AppstoreOutlined />}
                style={{ float: 'right' }}
                onClick={logout}
            >
                Выйти
            </Menu.Item>
        </Menu>
    )
}

export default Header
