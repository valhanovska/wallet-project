import styled from 'styled-components';
// import ElipsOrange from '../../assets/images/BG/Ellipse-orange-blur.png';

import splashOrangeTablet from '../../assets/images/BG/Ellipse-dbx1.png';
import splashBlueTablet from '../../assets/images/BG/Ellipse-db-bluex1.png';
import splashOrangeDesktop from '../../assets/images/BG/Ellipse-dbx1-desktop.png';
import splashBlueDesktop from '../../assets/images/BG/Ellipse-db-bluex1-desktop.png';


export const Div = styled.div`
  /* background-color: #e7eaf2; */
  background-color: red;
  padding: 15px 20px;
  

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    position: relative;
    min-width: 768px;
    height: 1024px;
    background-color: #e7eaf2;

    background-image: url(${splashBlueTablet}), url(${splashOrangeTablet});
    background-repeat: no-repeat;
    background-position: bottom 0 left 0, top 0 right 0;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    min-width: 768px;
    height: 1024px;
    background-color: #e7eaf2;

    background-image: url(${splashBlueDesktop}), url(${splashOrangeDesktop});
    background-repeat: no-repeat;
    background-position: bottom 0 left 0, top 0 right 0;
  }
`;

export const Blur = styled.div`
  /* @media screen and (min-width: 768px) {
    height: 1024px;
    backdrop-filter: blur(25px);
  }
  @media screen and (min-width: 1280px) {
    height: 1300px;
    backdrop-filter: blur(25px);
  } */
`;



export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;
export const BoxAsaid = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
  @media screen and (min-width: 1280px) {
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
padding-bottom: 15px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: flex;
  }
  
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    padding-right: 70px;
    min-height: calc(100vh - 80px);
    border-right: 1px solid #e7e5f2;
    border-bottom: none;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
    box  
  }
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
