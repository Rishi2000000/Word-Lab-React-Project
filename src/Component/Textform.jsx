import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export const Textform = (props) => {

    const handleupclick =()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
    }  
      const handleClear =()=>{
        let newtext = ("");
        setText(newtext)
    }

    const RemoveEX =()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
 const handleonchange =(event)=>{
    console.log("onchnage");
    setText(event.target.value);
 }
    const[text, setText]=useState("");
  return (
    <>
    <div>
    <div className='mb-3'>
      <label For="mybox" className='form-label'>{props.heading}</label>
      <textarea className='form-control' id='mybox' rows={3}   value={text}  onChange={handleonchange}></textarea>
    </div>
    <button className='btn btn-primary mx-2'  onClick={handleupclick}>Submit</button>
    <button className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>
    <button className='btn btn-primary mx-2' onClick={RemoveEX}>Remove Extra Spaces</button>
    
    </div>

    <div className='container my-3'>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Character</p>
        <p>{0.008* text.split(" ").length} Minutes to read</p>
    </div>

    </>
  );
};
