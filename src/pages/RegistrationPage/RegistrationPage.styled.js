import styled from 'styled-components';
import splashBlue from '../../assets/images/BG/Ellipse-blue.png';
import splashOrange from '../../assets/images/BG/Ellipse-orange.png';
import splashOrangeBlur from '../../assets/images/BG/Ellipse-orange-blur.png';
import splashBlueDesktop from '../../assets/images/BG/Ellipse-blue-desktop.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 0;

    position: relative;
    /* min-width: 768px; */
    min-height: 1024px;

    background-color: #e7eaf2;

    background-image: url(${splashBlue}), url(${splashOrange});
    background-repeat: no-repeat;
    background-position: bottom 0 left 0, top 0 right 0;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
    justify-content: flex-start;
    padding: 0;
    padding-left: 60px;
    /* justify-content: flex-end; */
    background-color: #e7eaf2;
    /* padding: 0;

    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 1280px;
    background-color: #e7eaf2; */

    background-image: url(${splashOrangeBlur}), url(${splashBlueDesktop});

    background-repeat: no-repeat;
    background-position: top 0 right 0, bottom 0 left 0;
  }
`;

export const Page = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: center;
    flex-direction: column;

    min-width: 768px;
    height: 1024px;
  }

  @media screen and (min-width: 1280px) {
    /* position: relative; */
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    width: 1280px;
    min-height: 720px;
  }
`;

export const Blur = styled.div`
  /* @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: center;
    margin-top: 360px;
  } */

  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 0px;
    top: 0px;
    right: 0px;
    left: 40%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    margin: 0px;
  }
`;

export const Title = styled.h1`
  @media screen and (min-width: 768px) {
    font-family: ${props => props.theme.fonts.poppins};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: 30px;
    line-height: 45px;
    display: inline-block;
    color: ${props => props.theme.textColor.primary};
    margin: 0;
  }
`;
