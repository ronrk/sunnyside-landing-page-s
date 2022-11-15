import styled from "styled-components";
import bg from "../../assets/images/desktop/image-header.jpg";

const HeroHeaderStyled = styled.div`
  background-image: url(${bg});
  background-size: 100vw 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  /* height: 65vh; */

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem;

    & h1 {
      font-size: 5rem;
      letter-spacing: 7px;
      word-spacing: 10px;
      font-family: var(--font-fraunces);
      text-transform: uppercase;
      color: var(--white);
      margin: 4rem 0;
      text-align: center;
    }

    & .icon-arrow {
      margin-top: 2rem;
    }
  }

  @media screen and (max-width: 650px) {
    & .header h1 {
      font-size: 4.5rem;
      padding: 0 0.5rem;
    }
    & .header .icon-arrow {
    }
  }
`;

export default HeroHeaderStyled;
