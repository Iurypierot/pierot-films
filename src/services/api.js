import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'pt-BR',
        page: 1
    }
})

export default api
