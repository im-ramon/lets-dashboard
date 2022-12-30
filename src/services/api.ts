import axios from "axios";

const api = axios.create({
    // baseURL: 'http://lojababybaby.com.br:21080'
    // baseURL: 'http://appespecialistax.com.br:21141',
    baseURL: 'https://api.appespecialistax.com.br',
})

export { api }