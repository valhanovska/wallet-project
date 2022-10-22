import styled from 'styled-components';

export const Container = styled.div`
  min-width: 280px;

  padding: 8px 30px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 30px;
  margin-bottom: 0px;
  /* margin-right: auto;
  margin-left: auto; */
  /* margin-top: ${p => p.theme.space[4]}px; */

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 336px;
    margin-left: 30px;
    margin-top: ${p => p.theme.space[10]}px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 16px;
    margin-bottom: 32px;
    padding: 10px 40px;
    margin-right: 20px;
    width: 395px;
  }
`;

export const Title = styled.p`
  font-family: ${props => props.theme.fonts.circe};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 18px;
  margin: 0;
  text-transform: uppercase;
  color: #a6a6a6;
`;

export const Result = styled.p`
  font-family: ${props => props.theme.fonts.poppins};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 30px;
  line-height: 45px;
  margin: 0;
  align-items: center;
  color: #000000;
`;
