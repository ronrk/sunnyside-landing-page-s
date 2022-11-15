import React from "react";
import Wrapper from "./styled/SectionImg.styled";

const SectionImg = ({ img, title, text }) => {
  return (
    <Wrapper>
      <img src={img} alt="" />
      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};

export default SectionImg;
