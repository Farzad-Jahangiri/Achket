import React from "react";
import "./right.css";
function Right() {
  return (
    <div className="containerright">
      <nav className="firstright">
        <a href="#">
          <p className="para">Explore NFTs</p>
        </a>
        <a href="#">
          <p className="para">Listed NFTs</p>
        </a>
        <a href="#">
          <p className="para">My NFTs</p>
        </a>
      </nav>
      <label className="switch">
        <input className="change-theme" type="checkbox" />
        <span className="slider round"></span>
      </label>
      <nav className="button">
        <button className="btn">Create</button>
      </nav>
    </div>
  );
}

export default Right;
