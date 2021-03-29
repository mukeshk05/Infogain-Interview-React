import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { PropTypes } from "prop-types"
import { get } from "lodash-es"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import IconButton from "@material-ui/core/IconButton"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

import { moviesList } from "../store/moviesListSlice"
import MovieDetail from "./movieDetail"

const DataRow = ({ columns, row }) => {
  const [open, setOpen] = React.useState(false)
  const { loading } = useSelector(moviesList)

  useEffect(() => {
    setOpen(false)
  }, [loading])

  return (
    <>
      <TableRow tabIndex={-1} key={row.show.id}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        {columns.map(column => (
          <TableCell key={column.id}>{get(row, column.id)}</TableCell>
        ))}
      </TableRow>

      <MovieDetail movie={row.show} open={open} />
    </>
  )
}

DataRow.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      minWidth: PropTypes.number.isRequired,
    })
  ).isRequired,
  row: PropTypes.shape({
    show: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
}

export default DataRow
