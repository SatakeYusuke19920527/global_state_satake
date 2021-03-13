import axios from 'axios'

const API = axios.create({
  baseUrl: 'https://jsonplaceholder.typicode.com'
})

export const fetchGetData = async () => {
  return await API.get('/users')
}