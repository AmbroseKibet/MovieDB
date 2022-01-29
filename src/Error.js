import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1 className="text-center">Oops! its a dead end</h1>
      <div className="container">
        <Link className="btn btn-center" to="/">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
