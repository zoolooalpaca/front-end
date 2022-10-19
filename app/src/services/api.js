import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://zoolooalpaca-api.loca.lt/api'
})

export const employeeAPI = {
    async getAll() {
        const response = await axiosInstance.get('/employees')
        if (response.status === 200) {
            return response.data
        }
        return []
    }
}