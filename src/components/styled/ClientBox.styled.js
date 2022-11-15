import styled from "styled-components";

const ClientBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 3rem;
  text-align: center;

  & img {
    display: block;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin-bottom: 5rem;
  }
  & p {
    font-size: 1.8rem;
    color: var(--very-dark-desaturated-blue);
    /* padding: 0 2rem; */
  }

  & .client-details {
    margin-top: 4rem;
    & h4 {
      font-size: 1.6rem;
      font-family: var(--font-fraunces);
      letter-spacing: 1px;
      color: var(--very-dark-desaturated-blue);
      margin-bottom: 0.7rem;
    }
    & span {
      font-size: 1.3rem;
      color: var(--very-dark-grayish-blue);
    }
  }
`;

export default ClientBoxStyled;
