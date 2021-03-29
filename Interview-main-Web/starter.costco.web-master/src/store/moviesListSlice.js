import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [],
    loading: true,
    page: 1,
    query: "",
  },
  reducers: {
    setMovies: (state, { payload }) => {
      state.movies = payload
      state.loading = false
    },
    updateQuery: (state, { payload }) => {
      state.query = payload
    },
    loadData: state => {
      state.loading = true
    },
    increasePage: state => {
      state.page += 1
    },
    addMovies: (state, { payload }) => {
      state.movies = [...state.movies, ...payload]
    },
  },
})

export const {
  setMovies,
  addMovies,
  loadData,
  increasePage,
  updateQuery,
} = moviesListSlice.actions

export const searchMovie = movieName => async dispatch => {
  dispatch(updateQuery(movieName))
  const res = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${movieName}`
  )
  dispatch(setMovies(res.data))
}

export const fetchMoreMovies = () => async (dispatch, getState) => {
  const { movies } = getState()
  dispatch(increasePage())
  // The API doesnt support page query param so it will return the same data again and again
  const res = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${movies.query}&page=${movies.page}`
  )
  dispatch(addMovies(res.data))
}

export const moviesList = state => state.movies

export default moviesListSlice.reducer
