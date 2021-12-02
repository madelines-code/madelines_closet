import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
  return (
  <div>
    <Link to="/">Closet Home</Link>
    <Link to="/styles/new">Add Style</Link>
  </div>
  );
};

export default Navbar;