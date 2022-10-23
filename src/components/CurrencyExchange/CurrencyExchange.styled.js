import styled from 'styled-components';
import illustration from '../../assets/images/currency-illustration.svg';

export const SpinnerWrap = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  color: #ffffff;
`;

export const CurrencyWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 250px;
  border-radius: 30px;

  background-color: ${p => p.theme.colors.blue};
  background-image: url(${illustration});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom center;

  overflow: hidden;
  margin: 15px auto 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 336px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    max-width: 393px;
    height: 350px;
    margin: 0;
  }
`;

export const CurrencyTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  color: #ffffff;
`;

export const CurrencyHead = styled.thead`
  font-size: 18px;
  font-weight: 700;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const CurrencyBody = styled.tbody`
  font-size: 16px;
  font-weight: 400;
`;

export const Tr = styled.tr`
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  transition: background ease 250ms;
`;

export const Th = styled.th`
  padding: 17px 10px;

  font-weight: inherit;
`;

export const ExchangeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  gap: 5px;
`;
export const ExchangeCcy = styled.div`
  color: #ffffff;
`;
export const Slash = styled.div`
  color: #ffffff;
`;
export const ExchangeValue = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
  font-size: 15px;
  text-align: center;
  background-color: transparent;
`;
