import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import NavBar from './NavBar';

const PageNotFound = () => (
  <div className="not-found">
    <NavBar />
    <Helmet title="404" />
    <h1>Page Not Found.</h1>
    <p>
      Return <Link to="/">home</Link>.
    </p>
  </div>
);

export default PageNotFound;
