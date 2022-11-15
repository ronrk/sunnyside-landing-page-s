import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as MenuIcon } from "../assets/images/icon-hamburger.svg";
import Wrapper from "./styled/Navbar.styled";

const Navbar = ({ openMenu }) => {
  return (
    <Wrapper>
      <Logo className="logo" />
      <ul className="nav-links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <button className="nav-btn">Contact</button>
        </li>
      </ul>
      <button
        className="menu-btn"
        onClick={() => {
          console.log("click");
          openMenu();
        }}
      >
        <MenuIcon />
      </button>
    </Wrapper>
  );
};

export default Navbar;
