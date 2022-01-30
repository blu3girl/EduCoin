import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const insertChild = payload => api.post(`/child`, payload)
export const deleteChildById = id => api.delete(`/child/${id}`)
export const getChildById = id => api.get(`/child/${id}`)
export const getAllChildren = () => api.get(`/children`)

export const getRewards = () => api.get(`/getRewards`)

const apis = {
    insertChild,
    deleteChildById,
    getChildById,
    getAllChildren,
    getRewards
}

export default apis