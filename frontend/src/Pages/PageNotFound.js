import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Oops! Page Not Found</h2>
        <p className="error-message">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="home-link">
          ⬅ Go Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
