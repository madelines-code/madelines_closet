import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';

const ClothForm = () => {
  const [item, setItem] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // don't get fact for new form, only edit
    if (params.id) {
      getCloth();
    }
  }, []);

  const getCloth = async () => {
    let res = await axios.get(`/api/styles/${params.id}/cloths/${params.id}`);
    // am I pulling this data wrong? can't seem to console.log what I want (below)
    try {
      console.log(res.data.item)
      setItem(res.data.item);
      setSize(res.data.size);
      setColor(res.data.color);
      setDescription(res.data.description);
// try to set quantity with cloths.length 
    } catch (err) {
      console.log(res.data)
      alert("Couldn't find that item to edit");
    }
  };

  const handleSubmit = async (e) => {
    // this prevents a reload
    e.preventDefault();
    console.log({ item: item, size: size, color: color, description: description });
    const cloth = { item: item, size: size, color: color, description: description };

    if (params.id) {
      // update logic here
      try {
        let response = await axios.put(`/api/styles/${params.id}/cloths/${params.id}`, cloth);
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
        let response = await axios.post("/api/styles/${params.id}/cloths", cloth);
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
      <h3>{params.id ? "Edit" : "New"} Article of Clothing </h3>
      <form onSubmit={handleSubmit}>
        <p>Item</p>
        <input value={item} onChange={(e) => setItem(e.target.value)} />
        <p>Size</p>
        <input value={size} onChange={(e) => setSize(e.target.value)} />
        <button>{params.id ? "Update" : "Add"} </button>
      </form>
    </div>
  );
};

export default ClothForm; 