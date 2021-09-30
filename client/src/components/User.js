import React from 'react'
import { Link } from 'react-router-dom'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const User = () => {
    return (
        <>
            <td>1</td>
            <td>Claypson Orisvaldo da silva</td>
            <td>claypson@gmail.com</td>
            <td>123522243</td>
            <td>
                <Link to=""><EditOutlined /></Link>
                {" "}
                <a to=""><DeleteOutlined /></a>

            </td>
        </>
    )
}

export default User
