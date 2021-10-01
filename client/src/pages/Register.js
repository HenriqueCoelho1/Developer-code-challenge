import React, { useState } from 'react'
import CreateForm from '../components/form/CreateForm'
import { createUser } from '../components/functions/User'


const initialState = {
    name: "",
    email: "",
    cpf: ""
}

const Register = ({ history }) => {
    const [values, setValues] = useState(initialState)
    const handleSubmit = (e) => {
        e.preventDefault()

        createUser(values).then(res => {
            // console.log(res)
            window.alert(`${res.data.name} was created`)
            history.push("/list")
        })
    }

    // console.log(values)

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <CreateForm
            handleSubmit={handleSubmit}
            values={values}
            setValues={setValues}
            handleChange={handleChange} />
    )
}

export default Register
