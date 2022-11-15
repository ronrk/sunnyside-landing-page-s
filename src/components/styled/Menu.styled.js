import styled from "styled-components";

const MenuStyled = styled.div`
  position: absolute;
  background-color: var(--white);
  width: 80%;
  height: 50vh;
  left: 50%;
  top: 15rem;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  border-radius: 3px;
  padding: 4rem;
  transform: scale(0.1);
  /* top: -15rem; */
  transition: all 0.2s;
  & .hide {
    display: none;
  }

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    & li {
      padding: 2rem;
    }

    & li a {
      text-decoration: none;
      font-size: 3rem;
      color: var(--very-dark-grayish-blue);
      font-family: var(--font-barlow);
    }
    & li button {
      display: block;
      background: transparent;
      border: 0;
      background-color: var(--yellow);
      padding: 2rem 4rem;
      border-radius: 1000px;
      font-size: 3rem;
      font-family: var(--font-barlow);
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background-color: hsla(51, 100%, 49%, 0.15);
        color: var(--dark-moderate-cyan);
      }
    }
  }
`;

export default MenuStyled;
