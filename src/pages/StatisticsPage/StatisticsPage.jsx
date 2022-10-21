import React from 'react';
import StatisticsChart from '../../components/Chart/Chart';
import StatisticsTable from './Table/Table';
import { Container, Title } from './StatisticsPage.styled';
import { Stack, useMediaQuery } from '@mui/material';

const getCategoriesSummaryMock = {
  categoriesSummary: [
    {
      name: 'Main expenses',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Products',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Car',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Self care',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Child care',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Household products',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Education',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Leisure',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Other expenses',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Entertainment',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Income',
      type: 'INCOME',
      total: 10,
    },
  ],
  incomeSummary: 0,
  expenseSummary: 0,
  periodtotal: 10,
  year: 0,
  month: 0,
};

const DiagramTab = () => {
  const { categoriesSummary, expenseSummary, incomeSummary } =
    getCategoriesSummaryMock;
  const matches = useMediaQuery('(min-width:1280px)');

  return (
    <Stack
      sx={{ px: '20px', pl: matches ? '69px' : undefined }}
      alignItems="center"
    >
      <Title>Statistics</Title>
      <Container>
        <StatisticsChart categoriesSummary={categoriesSummary} />
        <StatisticsTable
          categoriesSummary={categoriesSummary}
          incomeSummary={incomeSummary}
          expenseSummary={expenseSummary}
        />
      </Container>
    </Stack>
  );
};

export default DiagramTab;
