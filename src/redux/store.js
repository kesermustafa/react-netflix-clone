import {applyMiddleware, combineReducers, createStore} from "redux";
import genreReducer from "./reducers/genreReducer.js";
import movieReducer from "./reducers/movieReducer.js";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({

    genres:genreReducer,
    movies:movieReducer,
})


export default createStore(rootReducer, applyMiddleware(thunk));

