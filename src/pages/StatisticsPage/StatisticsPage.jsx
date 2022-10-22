import React from 'react';
import StatisticsChart from '../../components/Chart/Chart';
import StatisticsTable from './Table/Table';
import { Container, Title } from './StatisticsPage.styled';
import { Stack, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { getAllTransactionsForPeriod } from 'redux/transactionSummaryController/trSummarySelector';

const DiagramTab = () => {
  const allTransationsForPeriod = useSelector(getAllTransactionsForPeriod);
  const { categoriesSummary, expenseSummary, incomeSummary, periodTotal } =
    allTransationsForPeriod;
  const matches = useMediaQuery('(min-width:1280px)');
  const showStatistics = Boolean(expenseSummary && incomeSummary);

  if (!categoriesSummary) {
    return null;
  }

  return (
    <Stack
      sx={{ px: '20px', pl: matches ? '69px' : undefined }}
      alignItems="center"
    >
      <Title>Statistics</Title>
      <Container>
        {showStatistics ? (
          <StatisticsChart
            periodTotal={periodTotal}
            categoriesSummary={categoriesSummary}
          />
        ) : (
          <h3>You have no operations for this period</h3>
        )}
        <StatisticsTable
          showStatistics={showStatistics}
          categoriesSummary={categoriesSummary}
          incomeSummary={incomeSummary}
          expenseSummary={expenseSummary}
        />
      </Container>
    </Stack>
  );
};

export default DiagramTab;
