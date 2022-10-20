import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import CountUp from 'react-countup';
import { ChartContainer, CountUpContainer } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip);

const categoryColorMap = {
  'Main expenses': '#FED057',
  Products: '#FFD8D0',
  Car: '#FD9498',
  'Self care': '#C5BAFF',
  'Child care': '#6E78E8',
  'Household products': '#4A56E2',
  Education: '#81E1FF',
  Leisure: '#24CCA7',
  'Other expenses': '#00AD84',
  Entertainment: '#d9388b',
};

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

const Chart = () => {
  const { categoriesSummary } = getCategoriesSummaryMock;
  const expenseCategoriesSummary = categoriesSummary.filter(
    x => x.type !== 'INCOME'
  );

  const data = {
    labels: expenseCategoriesSummary.map(x => x.name),
    datasets: [
      {
        data: expenseCategoriesSummary.map(x => x.total),
        backgroundColor: expenseCategoriesSummary.map(
          x => categoryColorMap[x.name]
        ),
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  return (
    <ChartContainer>
      <Doughnut data={data} />
      <CountUpContainer>
        ₴ <CountUp end={10000} duration={2} />
      </CountUpContainer>
    </ChartContainer>
  );
};

export default Chart;
