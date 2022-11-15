import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: var(--dark-moderate-cyan);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & .logo {
    margin: 3rem;

    fill: var(--very-dark-desaturated-blue);
  }

  & ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
  }
  & .links {
    & li {
      padding: 2rem;
    }
    & li a {
      text-decoration: none;
      color: var(--very-dark-desaturated-blue);
      font-size: 1.5rem;

      font-family: var(--font-barlow);
      transition: all 0.2s;
      &:hover {
        color: var(--white);
      }
    }
  }

  & .social-links {
    margin: 4rem;
    & .icon {
      fill: var(--very-dark-desaturated-blue);
      transition: all 0.2s;
      &:hover {
        fill: var(--white);
      }
    }

    & li {
      margin: 1rem;
    }
  }
`;

export default FooterStyled;
