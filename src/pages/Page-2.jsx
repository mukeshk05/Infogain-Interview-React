import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import * as classNames from 'classnames/bind';
const cx = classNames.bind(require("./Page-2.module.css"));

const SecondPage = (linkProps) => {
  const {location: {state}} = linkProps;

  return (
  <Layout>
    <SEO title="Page two" />
    <div className={cx('product_wrapper_view')}>
      <div className={cx('product_image_view')}>
        <img alt="image placeholder" src={state.image}></img>
      </div>
      <div className={cx('product_description')}>
        <h4>{state.title}</h4>
        <span><b>category: </b>{state.category}</span>
        <span><b>Price: </b>${state.price}</span>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
		</div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
  }

export default SecondPage;
