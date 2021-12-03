import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Style from './Style';
import { Link } from 'react-router-dom';

// import {Route, Routes} from 'react-router-dom'

const Styles = () =>{
  const [styles, setStyles] = useState([]);
  useEffect(()=>{getStyles();
  }, []);

  const getStyles = async() => {
    let res = await axios.get('/api/styles');
    setStyles(res.data);
    console.log(res.data)
  }

  const renderStyles = () => {
    if(styles.length===0) {
      return <p>Closet is Empty. Time to go shopping!</p>;
    } 
    return styles.map((style) => {
      return <Style key={style.id} {...style} 
      // UNCOMMENT WHEN UPDATE AND DELETE ARE BUILT
      // deleteStyle={deleteStyle} updateStyle={updateStyle}
      />
    });
  }
return (
    <div>
      <h1>Welome to Madeline's Closet</h1>
      <p>Click a style category to see what items are available.</p>
      { renderStyles() }

    </div>
  );
};

export default Styles;