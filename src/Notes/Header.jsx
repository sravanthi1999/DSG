import React from "react";
import s from "./images/s.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={s} alt="logo" width="60" height="60" />
        <h1>Sravs Notes</h1>
      </div>
    </>
  );
};

export default Header;
