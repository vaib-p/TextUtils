import React, { useState } from 'react'

export default function TextForm(props) {

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
            <div className="mb-3" style={props.myStyle}>
            <h2 style={props.myStyle} >Enter Text to Analyze</h2>
            <textarea style={props.myStyle} className="form-control my-2" onChange={TextChange} value={text} rows="8"></textarea>
            </div>
            <button style={props.myStyle} type="button" class="btn btn-primary"  onClick={HandleUpClick}>Convert to UpperCase</button>
            <button style={props.myStyle} type="button" class="btn btn-primary mx-2 "  onClick={HandleLoClick}>Convert to LowerCase</button>
            <button style={props.myStyle} type="button" class="btn btn-primary mx-2 "  onClick={copytext}>Copy Text</button>
            <button style={props.myStyle} type="button" class="btn btn-primary mx-2 "  onClick={HandleClearClick}>Clear Text</button>

            <div style={props.myStyle} className="container my-3">
            <h3 style={props.myStyle} >Text Analyzer</h3>
            <p style={props.myStyle}>{text.split(" ").length} words and {text.length} characters</p>

            <h3 style={props.myStyle}>Preview</h3>
            <p style={props.myStyle}>{text}</p>
        </div>
        </div>
        

    </>
  )
}
