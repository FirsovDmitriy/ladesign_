import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.UNSPLASH_API_URL
})

export default instance
