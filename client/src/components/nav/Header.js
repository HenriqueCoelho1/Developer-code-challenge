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
            <Item key="list" icon={<OrderedListOutlined />} className="ml-auto">
                <Link to="/list">
                    Registros
                </Link>
            </Item>
            <Item key="register" icon={<SubnodeOutlined />} >
                <Link to="/register">
                    Cadastrar
                </Link>
            </Item>


        </Menu>
    )
}

export default HeaderComponent
