import React, { useState, useEffect } from 'react'
import { getUser, updateUser } from '../components/functions/User'
import UpdateForm from '../components/form/UpdateForm'


const initialState = {
    name: "",
    email: ""
}

const User = ({ match, history }) => {
    const { id } = match.params

    const [values, setValues] = useState(initialState)
    const [cpf, setCpf] = useState("")

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = () => {
        getUser(id).then(res => {
            setValues({ ...values, name: res.data.name, email: res.data.email })
            setCpf(res.data.cpf)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        updateUser(id, values).then(res => {
            window.alert(`${values.name} was updated`)
            history.push("/list")
        })


    }

    // console.log(values)

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <UpdateForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={values}
            cpf={cpf}
            setCpf={setCpf} />
    )
}

export default User
