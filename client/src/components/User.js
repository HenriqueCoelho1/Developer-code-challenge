import React from 'react'
import { Link } from 'react-router-dom'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const User = ({ user, handleRemove }) => {

    // console.log(user)

    const { id, cpf, name, email } = user

    const formatingCPF = (cpf) => {
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    return (
        <>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{formatingCPF(cpf)}</td>
            <td>
                <Link className="btn" to={`/user/${user.id}`}><EditOutlined className="text-info" /></Link>
                {" "}
                <a className="btn" onClick={() => handleRemove(id)}><DeleteOutlined className="text-danger" /></a>

            </td>
        </>
    )
}

export default User
