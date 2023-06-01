import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";

//create the temporary db / state / store
export default configureStore({
    reducer: rootReducers,

    //kalau di false, extension devtools di chrome bakal unable
    devTools: process.env.NODE_ENV === 'development'
})