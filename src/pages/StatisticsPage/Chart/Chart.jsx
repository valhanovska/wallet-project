import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import CountUp from 'react-countup';
import { ChartContainer, CountUpContainer } from './Chart.styled';
import { categoryColorMap } from '../categoryColorMap';

ChartJS.register(ArcElement, Tooltip);

const StatisticsChart = ({ categoriesSummary }) => {
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
        hoverOffset: 20,
      },
    ],
  };

  return (
    <ChartContainer>
      <Doughnut data={data} />
      <CountUpContainer>
        ₴ <CountUp end={10000} duration={1} />
      </CountUpContainer>
    </ChartContainer>
  );
};

export default StatisticsChart;
