import styled from 'styled-components';

export const ChartContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;

  @media screen and (min-width: 768px) {
    width: 288px;
    height: 288px;
  } ;
`;

export const CountUpContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  font-family: ${({ theme }) => theme.fonts.circe};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
