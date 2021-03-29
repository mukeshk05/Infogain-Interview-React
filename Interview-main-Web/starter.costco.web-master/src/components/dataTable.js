import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import { SentimentDissatisfiedOutlined } from "@material-ui/icons"
import { Skeleton } from "@material-ui/lab"
import { Waypoint } from "react-waypoint"

import {
  searchMovie,
  moviesList,
  fetchMoreMovies,
} from "../store/moviesListSlice"
import DataRow from "./dataRow"

const columns = [
  { id: "show.name", label: "Name", minWidth: 170 },
  { id: "show.language", label: "Language", minWidth: 100 },
  {
    id: "show.network.name",
    label: "Network",
    minWidth: 170,
  },
  {
    id: "score",
    label: "Score",
    minWidth: 170,
  },
  {
    id: "show.runtime",
    label: "Run Time",
    minWidth: 170,
  },
  {
    id: "show.type",
    label: "Type",
    minWidth: 170,
  },
]

export default function DataTable() {
  const { movies, loading } = useSelector(moviesList) // returns the current state of the store for the selected data
  const dispatch = useDispatch()

  useEffect(() => {
    // Initially loading data with the movie 'batman'
    dispatch(searchMovie("Batman"))
  }, [])

  const skeletonTableBody = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
    <TableRow key={`${val}-row-skeleton`}>
      <TableCell key="more-details-head-skeleton">
        <Skeleton />
      </TableCell>
      {columns.map(column => (
        <TableCell key={`${column.id}-skeleton`}>
          <Skeleton />
        </TableCell>
      ))}
    </TableRow>
  ))

  const table = (
    <TableContainer className="table-container">
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell key="more-details-head" />
            {columns.map(column => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth, fontWeight: 600 }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading
            ? movies.map((row, i) => (
                // row.show.id would have been unique if the api supported pagination. So temporarily disabling no-array-index-key
                // eslint-disable-next-line
                <React.Fragment key={`${row.show.id}-${i}-data-row`}>
                  <DataRow columns={columns} row={row} />
                  {i === movies.length - 1 && (
                    <TableRow>
                      <TableCell>
                        <Waypoint onEnter={() => dispatch(fetchMoreMovies())} />
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            : skeletonTableBody}
        </TableBody>
      </Table>
    </TableContainer>
  )

  const emptyMovies = (
    <div className="empty-table">
      <SentimentDissatisfiedOutlined className="empty-search-icon" />
      <h2>Movie or Series Not Found !</h2>
    </div>
  )

  return (
    <Paper className="table-body">
      {movies.length || loading ? table : emptyMovies}
    </Paper>
  )
}
