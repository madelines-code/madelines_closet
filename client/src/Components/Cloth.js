import React from "react";
import { Link } from "react-router-dom";

const Cloth = (props) => {
  return (
    <div> 
      <h2>{props.item}</h2>
      <p>Size: {props.size}</p>
      <p>Color: {props.color} </p>
      <p>Description: {props.description}</p>
      <Link to={`/styles/${props.id}/cloths/${props.id}`}>Edit</Link>
    </div>
  );
};

export default Cloth;
