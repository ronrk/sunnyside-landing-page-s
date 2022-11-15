import styled from "styled-components";

const GalleryStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & img {
    display: block;
    width: 25%;
    height: 30rem;
  }

  @media screen and (max-width: 850px) {
    & img {
      width: 50%;
      height: 25rem;
    }
  }
`;

export default GalleryStyled;
