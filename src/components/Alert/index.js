import React from "react";
import './style.scss'
export default function Alert(props) {
    const {visible, setVisible, text} = props
    console.log(visible.toString())
    // const [visible, setVisible] = React.useState(visible)
  return (
    <div className="alert" style={{display:visible}}>
      <span className="closebtn" onClick={setVisible} >
        &times;
      </span>
      {text}
    </div>
  );
}
