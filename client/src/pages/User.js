import React, { useState, useEffect } from 'react'
import { getUser } from '../components/functions/User'


const initialState = {
    name: "",
    email: "",
    cpf: "",
}

const User = ({ match }) => {
    const { id } = match.params

    const [values, setValues] = useState(initialState)

    useEffect(() => {
        loadUser()
    }, [loadUser])

    const loadUser = () => {
        getUser(id).then(res => {
            setValues({ ...values, ...res.data })
        })
    }

    return (
        <div>
            <h1>{values.name}</h1>
        </div>
    )
}

export default User
