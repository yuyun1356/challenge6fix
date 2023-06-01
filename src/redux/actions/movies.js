import movieApi from '../../tmdb/movieApi'
import {APIKey} from '../../tmdb/movieApiKey'
import { setDetails, setHeaders, setMovies, setSearchs, setUpcoming } from '../reducers/movies'

export const getMovies = () => async(dispatch) => {
    const response = await movieApi.get(`movie/popular?api_key=${APIKey}`)
    dispatch(setMovies(response.data.results))
}

export const getUpcoming = () => async(dispatch) => {
    const response = await movieApi.get(`movie/upcoming?api_key=${APIKey}`)
    dispatch(setUpcoming(response.data.results))
}

export const getDetails = (id) => async(dispatch) => {
    const response = await movieApi.get(`movie/${id}?api_key=${APIKey}`)
    dispatch(setDetails(response.data))
}

export const getHeaders = () => async(dispatch) => {
    const response = await movieApi.get(`movie/now_playing?api_key=${APIKey}`)
    dispatch(setHeaders(response.data.results))
}

export const getSearchs = (keyword) => async(dispatch) => {
    const response = await movieApi.get(`search/movie?query=${keyword}&api_key=${APIKey}`, keyword)
    dispatch(setSearchs(response.data.results))
}
