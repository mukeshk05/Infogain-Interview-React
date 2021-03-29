import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DataTable from "../components/dataTable"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <DataTable />
  </Layout>
)
export default IndexPage
