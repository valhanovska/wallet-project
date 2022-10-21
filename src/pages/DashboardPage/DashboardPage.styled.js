import styled from 'styled-components';
// import ElipsOrange from '../../assets/images/BG/Ellipse-orange-blur.png';

import splashOrangeTablet from '../../assets/images/BG/Ellipse-dbx1.png';
import splashBlueTablet from '../../assets/images/BG/Ellipse-db-bluex1.png';
import splashOrangeDesktop from '../../assets/images/BG/Ellipse-dbx1-desktop.png';
import splashBlueDesktop from '../../assets/images/BG/Ellipse-db-bluex1-desktop.png';

export const Blur = styled.div`
  /* height: 1024px; */
  /* width: 100vw; */
  /* backdrop-filter: blur(25px); */
  @media screen and (min-width: 768px) {
    /* height: 1300px */
    height: 1024px;
  /* width: 100vw; */
  backdrop-filter: blur(25px);
  }

  @media screen and (min-width: 1280px) {
    height: 1300px;
    backdrop-filter: blur(25px);
  }

`

export const Div = styled.div`
  background-color: #e7eaf2;
  height: 100vw;
  width: 100vw;

@media screen and (min-width: 768px) and (max-width: 1280px) {
    position: relative;
    min-width: 768px;
    height: 1024px;
    background-color: #e7eaf2;

    background-image: url(${splashBlueTablet}), url(${splashOrangeTablet});
    background-repeat: no-repeat;
    background-position:  bottom 0 left 0, top 0 right 0;

  }

  @media screen and (min-width: 1280px) {
    position: relative;
    min-width: 768px;
    height: 1024px;
    background-color: #e7eaf2;

    background-image: url(${splashBlueDesktop}), url(${splashOrangeDesktop});
    background-repeat: no-repeat;
    background-position:  bottom 0 left 0, top 0 right 0;

  }

`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: flex;
/* filter: blur(20px); */
@media screen and (min-width: 1280px){
  /* position: relative; */
  /* display: flex; */
    
}
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
 export const Container = styled.div`
 display: flex;
 justify-content: center;
 `
