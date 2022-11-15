import React from "react";
import Wrapper from "./styled/SectionText.styled";

const SectionText = ({ img, title, text, color }) => {
  return (
    <Wrapper className="section-text">
      <div className="content-container">
        <div className="content">
          <h2>{title}</h2>
          <p>{text}</p>
          <button className={`learn-btn ${color}`}>Learn More</button>
        </div>
      </div>
      <img src={img} alt="" />
    </Wrapper>
  );
};

export default SectionText;
