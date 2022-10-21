import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  max-width: 395px;
  font-family: ${({ theme }) => theme.fonts.circe};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  height: 58px;
  background: #ffffff;
  border-radius: 30px;
  font-size: 18px;
`;

export const TableHeaderCell = styled.th`
  font-size: 18px;
  padding: 0 28px;
  text-align: ${props => props.textAlign};
`;

export const TableRow = styled.tr`
  height: 56px;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme.borders.colors.secondary}`};
`;

export const TableCell = styled.td`
  padding: 0 28px;
  text-align: ${props => props.textAlign};
`;

export const CellContent = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryColor = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${({ color }) => color};
  border-radius: 2px;
  margin-right: 16px;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 28px;
`;

export const SummaryItemValue = styled.div`
  color: ${({ theme, isIncome }) =>
    isIncome ? theme.colors.accent : theme.colors.pink};
`;

export const Svg = styled.svg`
  width: 37px !important;
  height: 13px !important;

  &:active {
    padding-right: 10px !important;
  }
`;
