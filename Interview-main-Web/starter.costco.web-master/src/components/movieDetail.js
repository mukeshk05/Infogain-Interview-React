import React from "react"
import PropTypes from "prop-types"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import Collapse from "@material-ui/core/Collapse"

const MovieDetail = ({ movie, open }) => (
  <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
      <Collapse in={open}>
        <div className="flex">
          <div className="align-items-center">
            <img
              src={movie.image?.medium}
              className="movie-img"
              alt={movie.name}
            />
          </div>
          <div className="flex-1 sub-table">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Summary</TableCell>
                  <TableCell>
                    {/* dangerouslySetInnerHTML is used because movie.summary is a string containing html */}
                    {/* eslint-disable-next-line */}
                    <span dangerouslySetInnerHTML={{ __html: movie.summary }} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Rating</TableCell>
                  <TableCell>{movie.rating?.average || "-"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Status</TableCell>
                  <TableCell>{movie.status}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </Collapse>
    </TableCell>
  </TableRow>
)

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    status: PropTypes.string,
    summary: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.shape({
      average: PropTypes.oneOfType([
        // API Provides number or string
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
    image: PropTypes.shape({
      medium: PropTypes.string,
    }),
  }).isRequired,
  open: PropTypes.bool.isRequired,
}

export default MovieDetail
