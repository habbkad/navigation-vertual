import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  let id = "lknaskniohh90uu0---0i0-";
  return (
    <div>
      <h1>Services</h1>
      <Link to={`/about/:${id}`}>to params</Link>
    </div>
  );
};

export default Services;
