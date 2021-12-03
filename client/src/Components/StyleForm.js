import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';

const StyleForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // don't get fact for new form, only edit
    if (params.id) {
      getStyle();
    }
  }, []);

  const getStyle = async () => {
    try {
      let res = await axios.get(`/api/styles/${params.id}`);
      setName(res.data.name);
      setQuantity(res.data.quantity);
// try to set quantity with cloths.length 
    } catch (err) {
      alert("Couldn't find that style to edit");
    }
  };

  const handleSubmit = async (e) => {
    // this prevents a reload
    e.preventDefault();
    console.log({ name: name, quantity: quantity });
    const style = { name: name, quantity: quantity };

    if (params.id) {
      // update logic here
      try {
        let response = await axios.put(`/api/styles/${params.id}`, style);
        console.log(response.data);
        // need update UI (update response.data in items)
        navigate("/");
      } catch (err) {
        alert(`${err.response.data.errors}`);
      }
    } else {
      // creaete logic here
      // axios call here
      // save to database DONE
      try {
        let response = await axios.post("/api/styles", style);
        navigate("/");
        // need update  (add response.data to items)
      } catch (err) {
        alert("err occured");
        console.log(err);
        console.log(err.response);
      }
    }
  };
  return (
    <div>
      <h3>{params.id ? "Edit" : "New"} Style </h3>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Quantity</p>
        <input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button>{params.id ? "Update" : "Add"} </button>
      </form>
    </div>
  );
};

export default StyleForm;