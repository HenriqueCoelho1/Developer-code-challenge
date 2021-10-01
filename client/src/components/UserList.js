import React, { useState, useEffect } from 'react'
import User from './User'
import { getAllUsers } from './functions/User'

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
                        <th>Acoes</th>
                    </tr>
                </thead>

                <tbody>

                    {users ? users.map(user =>
                        <tr>
                            <User user={user} />
                        </tr>
                    ) : <h1>Nao ha usuarios</h1>}
                </tbody>

            </table>
        </>
    )
}

export default UserList
