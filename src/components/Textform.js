
// import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

export default function Textform(props) {
    const uppercase = ()=>{
      console.log(text);
      let newtext = text.toUpperCase();
      settext(newtext);
    }

    const lowercase = ()=>{
      console.log(text);
      let newtext = text.toLowerCase();
      settext(newtext);
    }
    const handleonchange=(event)=>{
      console.log("ONchange");
      settext(event.target.value);
    }
    const clear =()=>{
      settext("");
    }
    const [text, settext] = useState("");
  return (
    <>
    <div>
<div className="mb-3">
    <h3>{props.heading}</h3>
  <textarea className="form-control" value={text} onChange={handleonchange} id="my-box" rows="10"></textarea>
  
</div>
<button type="button" className="btn btn-primary" onClick={uppercase}>Uppercase</button>
<button type="button" className="btn btn-primary mx-3" onClick={lowercase}>Lowercase</button>
<button type="button" className="btn btn-primary mx-1" onClick={clear}>Reset</button>
    </div>
    <div className='container my-5'>
      <h3>Your Text summary</h3>
      <p>{text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008*text.split(' ').length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
