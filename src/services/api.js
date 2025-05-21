import axios from 'axios'


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '97a670b3004c7d520eb0a1af5d460913',
        language: 'pt-BR',
        page: 1
    }
})

export default api