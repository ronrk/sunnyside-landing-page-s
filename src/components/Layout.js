import React from "react";
import imgTransform from "../assets/images/desktop/image-transform.jpg";
import imgStandOut from "../assets/images/desktop/image-stand-out.jpg";
import imgPhoto from "../assets/images/desktop/image-photography.jpg";
import imgDesign from "../assets/images/desktop/image-graphic-design.jpg";

import HeroHeader from "./HeroHeader";
import SectionText from "./SectionText";
import SectionImg from "./SectionImg";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import Footer from "./Footer";

const Layout = ({ openMenu, closeMenu }) => {
  return (
    <main>
      <HeroHeader openMenu={openMenu} />
      <SectionText
        color="yellow"
        img={imgTransform}
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you."
      />
      <SectionText
        color="red"
        img={imgStandOut}
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
      />
      <section className="section-img">
        <SectionImg
          img={imgDesign}
          title="Graphic design"
          text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        />
        <SectionImg
          img={imgPhoto}
          title="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </section>

      <Testimonials />

      <Gallery />

      <Footer />
    </main>
  );
};

export default Layout;
