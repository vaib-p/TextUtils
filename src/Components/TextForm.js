import React, { useState } from 'react'

export default function TextForm() {

    const [text,setText] = useState("");
   
    const TextChange =(event) =>{
       setText(event.target.value);

    }
    const HandleUpClick = () =>{
        setText(text.toUpperCase());
    }
    const HandleLoClick = () =>{
        setText(text.toLowerCase());
    }
    const HandleClearClick = () =>{
        setText("");
    }

    const copytext = () =>{
        navigator.clipboard.writeText(text);
    }
  return (
    <>
        <div>
            <div className="mb-3">
            <h2>Enter Text to Analyze</h2>
            <textarea className="form-control my-2" onChange={TextChange} value={text} rows="8"></textarea>
            </div>
            <button type="button" class="btn btn-primary"  onClick={HandleUpClick}>Convert to UpperCase</button>
            <button type="button" class="btn btn-primary mx-2 "  onClick={HandleLoClick}>Convert to LowerCase</button>
            <button type="button" class="btn btn-primary mx-2 "  onClick={copytext}>Copy Text</button>
            <button type="button" class="btn btn-primary mx-2 "  onClick={HandleClearClick}>Clear Text</button>

            <div className="container my-3">
            <h3>Text Analyzer</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>

            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </div>
        

    </>
  )
}
