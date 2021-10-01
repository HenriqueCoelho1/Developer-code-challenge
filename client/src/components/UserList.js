import React, { useState, useEffect } from 'react'
import User from './User'
import { getAllUsers, removeUser } from './functions/User'

const UserList = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        loadAllUsers()
    }, [])

    const loadAllUsers = () => {
        getAllUsers().then(res => {
            setUsers(res.data)
        })
    }

    const handleRemove = (id) => {
        if (window.confirm(`Voce deseja deletar?`)) {
            removeUser(id).then(res => {
                loadAllUsers()
            }).catch(err => {
                if (err.response.status === 400) {
                    return
                }
                // console.log("Erro ao remover usuario", err)
            })

        }
    }

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col text-center pt-2">
                        <h2>Registrar</h2>
                    </div>

                </div>
            </div>

            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users ? users.map(user =>
                        <tr key={user.id}>
                            <User user={user} handleRemove={handleRemove} />
                        </tr>
                    ) : <h1>Não há usuarios</h1>}
                </tbody>

            </table>
        </>
    )
}

export default UserList
