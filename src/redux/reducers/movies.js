import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    upcoming: [],
    details: null,
    headers: [],
    searchs: [],
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setDetails: (state, action) => {
            state.details = action.payload
        },
        setUpcoming: (state, action) => {
            state.upcoming = action.payload
        },
        setHeaders: (state, action) => {
            state.headers = action.payload
        },
        setSearchs: (state, action) => {
            state.searchs = action.payload
        },
    }
})

export const { setMovies, setDetails, setUpcoming, setHeaders, setSearchs } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllUpcoming = (state) => state.movies.upcoming
export const getAllDetails = (state) => state.movies.details
export const getAllHeaders = (state) => state.movies.headers
export const getAllSearchs = (state) => state.movies.searchs


export default movieSlice.reducer;