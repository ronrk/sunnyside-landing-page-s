import styled from "styled-components";

const SectionImgStyled = styled.div`
  flex: 0 1 50%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 60vh;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
  & .content {
    /* position: absolute; */
    /* top: 35rem; */
    /* left: 50%; */
    /* transform: translateX(-50%); */
    text-align: center;
    padding: 4rem 6rem;

    & h3 {
      font-size: 3rem;
      color: var(--very-dark-desaturated-blue);
      font-family: var(--font-fraunces);
      letter-spacing: 1.5px;
      margin-bottom: 2.3rem;
    }
    & p {
      font-size: 1.8rem;
      color: var(--very-dark-desaturated-blue);
    }
  }

  @media screen and (max-width: 650px) {
    /* flex-direction: column; */
  }
`;

export default SectionImgStyled;
