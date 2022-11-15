import React from "react";
import Navbar from "./Navbar";
import Wrapper from "./styled/HeroHeader.styled";
import { ReactComponent as IconArrow } from "../assets/images/icon-arrow-down.svg";

const HeroHeader = ({ openMenu }) => {
  return (
    <Wrapper>
      <Navbar openMenu={openMenu} />
      <header className="header">
        <h1>We Are Creatives</h1>
        <IconArrow className="icon-arrow" />
      </header>
    </Wrapper>
  );
};

export default HeroHeader;
