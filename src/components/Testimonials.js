import React from "react";
import ClientBox from "./ClientBox";
import img1 from "../assets/images/image-emily.jpg";
import img2 from "../assets/images/image-thomas.jpg";
import img3 from "../assets/images/image-jennie.jpg";
import Wrapper from "./styled/Testimonials.styled";

const Testimonials = () => {
  return (
    <Wrapper>
      <h3 className="testimonials__title">Client testimonials</h3>
      <div className="clients-container">
        <ClientBox
          img={img1}
          text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          position="Marketing Director"
        />
        <ClientBox
          img={img2}
          text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
          position="Chief Operating Officer"
        />
        <ClientBox
          img={img3}
          text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          position="Business Owner"
        />
      </div>
    </Wrapper>
  );
};

export default Testimonials;
