import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"

import Header from "./header"
import store from "../store/index"
import "../styles.css"

const Layout = ({ children }) => (
  <>
    <Provider store={store}>
      <Header siteTitle="Movies recent orders" />
      {children}
    </Provider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
