import styled from "styled-components";

const SectionTextStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .content {
    width: 65%;
    margin: auto;
  }

  & .content-container {
    flex: 1 1 50%;
    margin: auto;

    & h2 {
      font-family: var(--font-fraunces);
      font-size: 4.3rem;
      letter-spacing: 2px;
      word-spacing: 4px;
      margin-bottom: 4rem;
      color: var(--very-dark-desaturated-blue);
    }
    & p {
      font-family: var(--font-barlow);
      font-size: 1.8rem;
      letter-spacing: 1px;
      line-height: 1.4;
      margin-bottom: 5rem;

      color: var(--very-dark-grayish-blue);
    }
  }

  & .learn-btn.red {
    background-color: var(--soft-red);
    &:hover {
      background: 0;
      box-shadow: 0 5px 5px 2px var(--soft-red);
    }
  }
  & .learn-btn.yellow {
    background-color: var(--yellow);
    &:hover {
      background: 0;
      box-shadow: 0 5px 5px 2px var(--yellow);
    }
  }
  & .learn-btn {
    background: 0;
    border: 0;
    font-size: 1.8rem;
    letter-spacing: 2px;
    font-family: var(--font-fraunces);
    text-transform: uppercase;

    border-radius: 1000px;
    padding: 0.3rem 1rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  & img {
    display: block;
    flex: 0 1 50%;
    align-self: center;
    width: 50%;
    /* object-fit: fill; */
  }

  @media screen and (max-width: 850px) {
    .content-container {
      & h2 {
        margin-bottom: 2rem;
        font-size: 3.5rem;
      }

      & p {
        margin-bottom: 2rem;
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    height: 60rem;
    & .content {
      flex: 1 0 100%;
      /* height: 30rem; */
      text-align: center;
      margin: 6rem auto;
    }

    & .content-container {
      width: 100%;
      margin: 0;
      text-align: center;
    }
    & img {
      flex: 0 1 20%;
      width: 100%;
      max-height: 50%;
    }
  }
`;

export default SectionTextStyled;
