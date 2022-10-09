import axios from 'axios'

axios.defaults.withCredentials = true

const baseUrl = `http://localhost:5000/api/v1`

export const setRequest = axios.create({
	baseURL: baseUrl
})