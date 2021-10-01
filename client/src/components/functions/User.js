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

export const updateUser = async (id, values) => {
    return await axios.put(`http://localhost:5000/api/user/${id}`, values)
}

export const removeUser = async (id) => {
    return await axios.delete(`http://localhost:5000/api/user/${id}`)
}