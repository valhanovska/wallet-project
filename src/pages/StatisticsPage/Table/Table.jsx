import { Stack } from '@mui/material';
import React, { useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllTransactionsForPeriodUser } from 'redux/transactionSummaryController/trSummaryOperation';
import { categoryColorMap } from '../categoryColorMap';
import DateSelect from './DateSelect/DateSelect';
import {
  Svg,
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
  ArrowDownIcon,
} from './Table.styled';

const months = [
  { value: 1, name: 'January' },
  { value: 2, name: 'Febuary' },
  { value: 3, name: 'March' },
  { value: 4, name: 'April' },
  { value: 5, name: 'May' },
  { value: 6, name: 'June' },
  { value: 7, name: 'July' },
  { value: 8, name: 'August' },
  { value: 9, name: 'September' },
  { value: 10, name: 'October' },
  { value: 11, name: 'November' },
  { value: 12, name: 'December' },
];

const currentYear = new Date().getFullYear();
const years = new Array(40)
  .fill(null)
  .map((_, index) => currentYear - index)
  .map(x => ({ value: x, name: x }));

const StatisticsTable = ({
  categoriesSummary,
  incomeSummary,
  expenseSummary,
}) => {
  const expenseCategoriesSummary = categoriesSummary.filter(
    x => x.type !== 'INCOME'
  );
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const dispatch = useDispatch();

  console.log('year', year);
  console.log('month', month);

  useEffect(() => {
    if (year && month) {
      dispatch(
        getAllTransactionsForPeriodUser({
          month: Number(month),
          year: Number(year),
        })
      );
    }
  }, [year, month]);

  return (
    <TableContainer>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        spacing={2}
        mb="20px"
      >
        <DateSelect
          label="Month"
          value={month}
          onChange={e => setMonth(e.target.value)}
          options={months}
        />
        <DateSelect
          label="Year"
          value={year}
          onChange={e => setYear(e.target.value)}
          options={years}
        />
      </Stack>
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
