import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export const Usetate = (props) => {
  const changetoup =()=>{
let newText = text.toUpperCase();
      setText(newText);
  }

  const handleon =(event)=>{
   setText(event.target.value);
  }
 const [text, setText] = useState("hello");

  return (
    <div>z
    <div className='mb-3'>
      <label for="mybox" className='form-label'>{props.heading}</label>
      <textarea className='form-control' id='mybox' rows={3}  value={text} onChange={handleon}></textarea>
    </div>
    <button className='btn btn-primary'  onClick={changetoup}>Submit</button>
    </div>
  );
};
