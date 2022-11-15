import React from "react";
import Wrapper from "./styled/ClientBox.styled";

const ClientBox = ({ img, text, name, position }) => {
  return (
    <Wrapper>
      <img src={img} alt="" />
      <p>{text}</p>
      <div className="client-details">
        <h4>{name}</h4>
        <span>{position}</span>
      </div>
    </Wrapper>
  );
};

export default ClientBox;
