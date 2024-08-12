import React from "react";
import "./style.css"

function Input({ icon ,placeholder,type }) {
  return (
    <div className="InputLogin gap-3 d-flex border">
      <div>{icon} </div>
      <input className="border-0 flex-grow-1" placeholder={placeholder} type={type} />
    </div>
  );
}

export default Input;
