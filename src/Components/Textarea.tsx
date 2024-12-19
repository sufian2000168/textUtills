import React, { useState } from "react";

export default function Textarea() {
  const [text, setText] = useState("");

  const valupd = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const convu = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const convuu = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clear = () => {
    let newText = "";
    setText(newText);
  };
  const copyText = () => {
    var text= document.getElementById("cptxt");
    text.select();
    navigator.clipboard.writeText(text.value)
  };
  const extraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };


  return (
    <>
      <div className="container">
      <div className="mb-3">
        <h2>ENTER TEXT TO ANALYZE</h2>
        <textarea
          className="form-control"
          id="cptxt"
          value={text}
          rows={9}
          placeholder="Enter Text Here"
          onChange={valupd}
        />
      </div>
      </div>
      <button onClick={convu} type="button" className="btn btn-primary mx-2">Convert To Uppercase</button>
      <button onClick={convuu} type="button" className="btn btn-primary mx-2">Convert To LowerCase</button>
      <button onClick={clear} type="button" className="btn btn-primary mx-2">Clear</button>
      <button onClick={copyText} type="button" className="btn btn-primary mx-2">Copy Text</button>
      <button onClick={extraSpace} type="button" className="btn btn-primary mx-2">Remove Extra Space</button>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} Words {text.length} Characters</p>
        <p>{0.08*text.split(" ").length} Minutes Read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
