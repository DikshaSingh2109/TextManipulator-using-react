import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Handled the uppercase", "success");
   
    
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert(" Text has been cleared ", "success");
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Handled the lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var textArea = document.getElementById("myBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert(" Text copied to the clipboard", "success");
  };

  const handleInverseClick = () => {
    let newText = text.split('').map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    );
    setText(newText.join(''));
    props.showAlert(" Handled the inverse case", "success");
  };

  return (
  <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control"value={text} onChange={handleOnChange} id="myBox" rows="10" style={{ backgroundColor: props.mode === 'dark' ? '#12498d' : 'white'  , color:props.mode === 'dark' ? 'white' : 'black'}}></textarea>
          </div>
          <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpclick} >Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-info mx-1  my-1" onClick={handleLoclick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear the screen</button>
          <button disabled={text.length===0} className="btn btn-success mx-1    my-1" onClick={handleCopy}>Copy the Text</button>
          <button disabled={text.length===0} className="btn btn-warning mx-1    my-1" onClick={handleInverseClick}>Inverse the Text</button>
        </div>
      </div>
 <div className="container my-3" style={{color:props.mode==='light'? 'black':'white'  }} >
        <h1>Your Text Summary</h1>
        <p>{ text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>  {/* yaha pe mene ternanry operator use kra hai takki words 0 se start hote hue dikhaye de and then gradually according to length increase kre */} 
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes will take to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
