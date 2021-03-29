import React from "react";
import LazyLoad from "react-lazyload";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Products } from "./Products";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4>Yours Orders</h4>
    <LazyLoad once={true} height={300} offset={100}>
    <div>
      <Products />
    </div>
    </LazyLoad>
  </Layout>
)

export default IndexPage;
