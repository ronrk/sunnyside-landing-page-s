import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as IconFacebook } from "../assets/images/icon-facebook.svg";
import { ReactComponent as IconInstagram } from "../assets/images/icon-instagram.svg";
import { ReactComponent as IconTwitter } from "../assets/images/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../assets/images/icon-pinterest.svg";
import Wrapper from "./styled/Footer.styled";

const Footer = () => {
  return (
    <Wrapper>
      <Logo className="logo" />
      <ul className="links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>
      <ul className="social-links">
        <li>
          <a href="#">
            <IconFacebook className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <IconInstagram className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <IconTwitter className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <IconPinterest className="icon" />
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Footer;
