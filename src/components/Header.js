import React from "react";
import "./Header.css";
import wowicon from "../assets/warcraft-icon.jpg"

const Header = () => {
  return (
    <>
    <div className="header">
      <h1 className="header-h1">ERDW Keystone.io</h1>
      <img className="wow-icon" src={wowicon} alt="wowicon"/>
    </div>
      <div>
        <h2 className="header-h2">This weeks pain in the ass</h2>
        <span className="material-symbols-outlined">arrow_downward</span>
      </div>
    </>
  );
};

export default Header;
