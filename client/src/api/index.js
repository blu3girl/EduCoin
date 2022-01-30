import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const insertChild = payload => api.post(`/child`, payload)
export const deleteChildById = id => api.delete(`/child/${id}`)
export const getChildById = id => api.get(`/child/${id}`)
export const getAllChildren = () => api.get(`/children`)
export const updateChildCoins = payload => api.put(`child`, payload)
export const getRewards = () => api.get(`/rewards`)
// need "reward", "child"
export const createRewardRequest = payload => api.post(`/reward-request`, payload)

const apis = {
    insertChild,
    deleteChildById,
    getChildById,
    getAllChildren,
    updateChildCoins,
    getRewards,
    createRewardRequest
}

export default apis