import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { AppstoreOutlined, OrderedListOutlined, SubnodeOutlined } from '@ant-design/icons'


const { Item } = Menu


const HeaderComponent = () => {
    const [current, setCurrent] = useState("")

    const handleClick = (e) => {
        setCurrent(e.key)
    }



    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Item key="home" icon={<AppstoreOutlined />}>
                <Link to="/">
                    Home
                </Link>
            </Item>
            <Item key="list" icon={<SubnodeOutlined />} className="ml-auto">
                <Link to="/list">
                    Casdastrar
                </Link>
            </Item>
            <Item key="register" icon={<OrderedListOutlined />}>
                <Link to="/register">
                    Registros
                </Link>
            </Item>


        </Menu>
    )
}

export default HeaderComponent
