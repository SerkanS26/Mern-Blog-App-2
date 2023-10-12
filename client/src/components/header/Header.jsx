import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSM">React & Node</span>
        <span className="headerTitleLG">Blog</span>
      </div>
      <img className="headerImg" src="/headerImg.jpg" alt="" />
    </div>
  );
};

export default Header;
