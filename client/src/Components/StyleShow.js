import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Cloth from "./Cloth";
import StyleForm from "./StyleForm";
import Style from "./Style";


const StyleShow = (props) => {
  const [cloths, setCloths] = useState([]);
  const location = useLocation();
  const { style } = location.state;
  // when using useLocation remember to add the state to the place where you're calling this component (StyleShow)
  // in this case it is on the Style page.

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let styleRes = await axios.get(`/api/styles/${style.id}`);
      let res = await axios.get(`/api/styles/${style.id}/cloths`);
      setCloths(res.data);
    } catch (err) {
      alert("Error finding clothes")
    }
  };

  const renderCloths = () =>
  cloths.map((c) => < Cloth key={c.id} {...c} />);

  return (
    <div>
      <h1>{style.name} list</h1>
      <p> {style.quantity} Items</p>
      <StyleForm styleId={style.id} />
      <hr/>
      {renderCloths()}
    </div>
  );
};

export default StyleShow;