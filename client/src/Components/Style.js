import React, { useState } from "react";
import { Link } from "react-router-dom";

const Style = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Quantity: {props.quantity}</p>
      <Link to={`/styles/${props.id}`} state={{style: props}} >View Clothes</Link>
      {/* adding state to this link is essential to make useLocation work */}
    </div>
  );
};

export default Style;