import React from 'react';
import StatisticsChart from './Chart/Chart';
import StatisticsTable from './Table/Table';
import { Container } from './StatisticsPage.styled';

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

const StatisticsPage = () => {
  const { categoriesSummary, expenseSummary, incomeSummary } =
    getCategoriesSummaryMock;

  return (
    <>
      <h2>Statistics</h2>
      <Container>
        <StatisticsChart categoriesSummary={categoriesSummary} />
        <StatisticsTable
          categoriesSummary={categoriesSummary}
          incomeSummary={incomeSummary}
          expenseSummary={expenseSummary}
        />
      </Container>
    </>
  );
};

export default StatisticsPage;
