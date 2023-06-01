import { combineReducers } from "@reduxjs/toolkit";
import auth from './auth'
import movies from './movies'

export default combineReducers ({
    auth,
    movies,
})