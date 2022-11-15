import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem;
  .logo {
    fill: var(--white);
    padding: 0;
    margin: 0;
    flex-shrink: 4;
  }

  & .menu-btn {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: none;
  }

  .nav-links {
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-between;
    width: 50rem;

    & li {
      margin: 0 0.5rem;
    }

    & li a {
      text-decoration: none;
      font-size: 1.8rem;
      color: var(--white);
      font-family: var(--font-barlow);
      letter-spacing: 0.8px;
      transition: all 0.2s;
      &:hover {
        color: var(--soft-red);
      }
    }
    & li button {
      border: 0;
      background: 0;
      background-color: var(--white);
      font-size: 1.9rem;
      font-family: var(--font-fraunces);
      padding: 1.5rem 3rem;
      border-radius: 10000px;
      color: var(--dark-desaturated-cyan);
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: hsla(168, 34%, 41%, 0.2);
        color: var(--white);
      }
    }
  }

  @media screen and (max-width: 650px) {
    & .nav-links {
      display: none;
    }
    & .menu-btn {
      display: block;
    }
  }
`;

export default NavbarStyled;
