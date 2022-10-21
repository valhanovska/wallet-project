import styled from 'styled-components';

export const ChartContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin: 0 auto;
  margin-top: ${p=>p.theme.space[3]}px;

  @media screen and (min-width: 768px) {
    width: 288px;
    height: 288px;
    margin-left: ${p=>p.theme.space[9]}px;
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

export const Container = styled.div`
@media screen and (min-width: 768px){
  margin-top: ${p=>p.theme.space[9]}px;
}

`
 export const TitleStatistic = styled.h2`
 font-family: ${p=>p.theme.fonts.poppins};
 font-weight: ${p=>p.theme.fontWeights.normal};
 font-size: ${p=>p.theme.fontSizes.l};
 margin-left: ${p=>p.theme.space[9]}px;
 margin-bottom: ${p=>p.theme.space[0]}px;
 margin-top: ${p=>p.theme.space[0]}px;
 @media screen and (min-width: 768px){
  margin-left: ${p=>p.theme.space[5]}px;
}
 `;
