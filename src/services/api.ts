import axios from "axios";

const api = axios.create({
    // baseURL: 'http://192.168.1.4:21080'
    baseURL: 'http://lojababybaby.com.br:21080'
})

export { api }