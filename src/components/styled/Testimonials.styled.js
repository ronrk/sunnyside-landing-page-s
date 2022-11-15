import styled from "styled-components";

const TestimonialsStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15rem;

  & h3 {
    font-size: 3rem;
    font-family: var(--font-fraunces);
    text-transform: uppercase;
    color: var(--dark-grayish-blue);
    letter-spacing: 3px;
    word-spacing: 10px;
    margin-bottom: 5rem;
    text-align: center;
  }

  @media screen and (max-width: 850px) {
    padding: 7rem;
  }
`;

export default TestimonialsStyled;
