import React from 'react';
import CountUp from 'react-countup';
import { categoryColorMap } from '../categoryColorMap';
import {
  CategoryColor,
  CellContent,
  TableHeader,
  TableRow,
  Table,
  TableCell,
  TableHeaderCell,
  TableContainer,
  SummaryItem,
  SummaryItemValue,
} from './Table.styled';

const StatisticsTable = ({
  categoriesSummary,
  incomeSummary,
  expenseSummary,
}) => {
  const expenseCategoriesSummary = categoriesSummary.filter(
    x => x.type !== 'INCOME'
  );

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell textAlign="left">Category</TableHeaderCell>
            <TableHeaderCell textAlign="right">Sum</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {expenseCategoriesSummary.map((x, index) => (
            <TableRow key={x.name}>
              <TableCell textAlign="left">
                <CellContent>
                  <CategoryColor color={categoryColorMap[x.name]} />
                  {x.name}
                </CellContent>
              </TableCell>
              <TableCell textAlign="right">
                <CountUp end={x.total} duration={1} />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <SummaryItem>
        <span>Expenses:</span>
        <SummaryItemValue>
          <CountUp end={expenseSummary} duration={1} />
        </SummaryItemValue>
      </SummaryItem>
      <SummaryItem>
        <span>Income:</span>
        <SummaryItemValue isIncome>
          <CountUp end={incomeSummary} duration={1} />
        </SummaryItemValue>
      </SummaryItem>
    </TableContainer>
  );
};

export default StatisticsTable;
