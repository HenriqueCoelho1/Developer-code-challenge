import React from 'react'
import User from './User'

const UserList = () => {
    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="sm-6 text-center pt-2">
                        <h2>Registrar</h2>
                    </div>
                    <div className="sm-6">
                        <button></button>
                    </div>
                </div>
            </div>


            <table className="table table-stripped table-hover">
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
                    <tr>
                        <User />
                    </tr>
                </tbody>

            </table>
        </>
    )
}

export default UserList
