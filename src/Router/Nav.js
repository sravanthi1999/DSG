import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <NavLink exact activeClassName="active_class" to="/about">
        About
      </NavLink>
      <br />
      <NavLink exact activeClassName="active_class" to="/contact">
        Contact
      </NavLink>
    </>
  );
};

export default Nav;
