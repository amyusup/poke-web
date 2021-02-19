import React from "react";
import './style.scss'
export default function Alert(props) {
    const {visible, setVisible, text} = props
  return (
    <div className="alert" style={{display:visible}}>
      <span className="closebtn" onClick={setVisible} >
        &times;
      </span>
      {text}
    </div>
  );
}
