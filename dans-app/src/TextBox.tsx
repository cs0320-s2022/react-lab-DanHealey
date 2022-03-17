import React from 'react';
import './App.css';
//@ts-ignore
function TextBox(props : {label :string, change : (any) => void}) {
  return (
    <div className="textbox">
      <form>
      <label>{props.label}</label>
      <input type="text" onChange={e => props.change(e.target.value)} />
      </form>
    </div>
  );
}



export default TextBox;
