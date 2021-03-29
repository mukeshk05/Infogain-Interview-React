import React from "react"
import PropTypes from "prop-types"
import { debounce } from "lodash-es"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import { useDispatch } from "react-redux"

import { searchMovie, loadData } from "../store/moviesListSlice"

const Header = ({ siteTitle }) => {
  const dispatch = useDispatch()

  const debounceSearch = debounce(text => {
    dispatch(searchMovie(text))
  }, 500)

  const search = e => {
    dispatch(loadData())
    debounceSearch(e.target.value)
  }

  return (
    <header>
      <div className="flex p-3">
        <h1 className="flex-1">{siteTitle}</h1>
        <div className="searchContainer">
          <InputBase
            className="searchBox"
            placeholder="Search Movie Name"
            onChange={search}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
