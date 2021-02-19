import React from "react";
import "./style.scss";

export default function index(props) {
  const { placeholder, onChange, value } = props;
  return (
    <div className="container-input p-10 px-20 radius-20">
      <input
        type="text"
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
