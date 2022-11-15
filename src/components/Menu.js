import React from "react";
import Wrapper from "./styled/Menu.styled";

const Menu = ({ menuIsOpen }) => {
  return (
    <Wrapper className={menuIsOpen ? "menu show" : "menu hide"}>
      <ul>
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
          <button>Contact</button>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Menu;
