import axios from 'axios'

const baseUrl = `http://localhost:5000/api/v1`

export const setRequest = axios.create({
	withCredentials: true,
	baseURL: baseUrl
})