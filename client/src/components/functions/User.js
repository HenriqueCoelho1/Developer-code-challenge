import axios from 'axios'


export const getAllUsers = async () => {
    return await axios.get("http://localhost:5000/api/user")
}

export const getUser = async (id) => {
    return await axios.get(`http://localhost:5000/api/user/${id}`)
}

export const createUser = async (values) => {
    return await axios.post(`http://localhost:5000/api/user`, values)
}