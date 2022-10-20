import styled from 'styled-components';
// import ElipsOrange from '../../assets/images/BG/Ellipse-orange-blur.png';

export const Div = styled.div`
  background-color: #e7eaf2;
  height: 100vw;
  width: 100vw;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

/* @media screen and (min-width: 768px) {
    background-image: url(${ElipsOrange});
    background-repeat: no-repeat;
    backdrop-filter: blur(25px); */
/* } */
