import axios from 'axios'

const API_KEY = 'c69d2a19ff726a9c10707b583a997cde';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    console.log('API response successfully');
    // console.log(response.data.results);
    return response.data.results
}

export const fetchSearchMovies = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    console.log('API response successfully');
    // console.log(response.data.results);
    return response.data.results
}