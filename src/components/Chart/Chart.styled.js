import styled from 'styled-components';

export const ChartContainer = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
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
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
