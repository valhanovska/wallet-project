import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const TableContainer = styled.div`
  width: 100%;
  max-width: 395px;
  font-family: ${({ theme }) => theme.fonts.circe};

  @media screen and (min-width: 768px) {
    width: 395px;
  }
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
  border-radius: ${({ textAlign }) =>
    textAlign === 'right' ? '0 30px 30px 0' : '30px 0 0 30px'};
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

export const ArrowDownIcon = styled(KeyboardArrowDownIcon)`
  scale: 1.3 !important;
`;
