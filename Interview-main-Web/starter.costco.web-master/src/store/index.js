import { configureStore } from "@reduxjs/toolkit"
import moviesListReducer from "./moviesListSlice"

export default configureStore({
  reducer: {
    movies: moviesListReducer,
  },
})
