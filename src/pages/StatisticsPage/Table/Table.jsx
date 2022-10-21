import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { categoryColorMap } from '../categoryColorMap';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import arrow from 'assets/icons/sprite.svg';

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
} from './Table.styled';

const StatisticsTable = ({
  categoriesSummary,
  incomeSummary,
  expenseSummary,
}) => {
  const expenseCategoriesSummary = categoriesSummary.filter(
    x => x.type !== 'INCOME'
  );
  const [age, setAge] = React.useState('');

  const selectRef = useRef(null);

  const handleChange = event => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  return (
    <TableContainer>
      <FormControl fullWidth>
        <InputLabel ref={selectRef} id="demo-simple-select-label">
          Month
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Month"
          onChange={handleChange}
          IconComponent={props => (
            <Svg {...props}>
              <use href={arrow + '#dropdown-arrow'}></use>
            </Svg>
          )}
          sx={{
            width: 181,
            height: 50,
            borderRadius: 30,
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
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
