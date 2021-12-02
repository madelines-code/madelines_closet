import React, { useState } from "react";

const Style = (props) => {
  const{id} = props

  return (
    <div>
      <h1>{props.name}</h1>
      <p>Quantity: {props.quantity}</p>
    </div>
  );
};

export default Style;