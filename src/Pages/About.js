import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  let id = 98974366;
  return (
    <div>
      <h1>About</h1>
      <Link to={"/"}>back home</Link>{" "}
      <Link to={`/about/:${id}`}>to params</Link>
    </div>
  );
};

export default About;
