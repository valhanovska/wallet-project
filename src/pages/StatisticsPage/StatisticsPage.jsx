import { useEffect } from 'react';
import StatisticsChart from '../../components/Chart/Chart';
import StatisticsTable from './Table/Table';
import { Container, Title } from './StatisticsPage.styled';
import { Stack, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactionsForPeriod } from 'redux/transactionSummaryController/trSummarySelector';
import { getAllTransactionsForPeriodUser } from 'redux/transactionSummaryController/trSummaryOperation';

const DiagramTab = () => {
  const allTransationsForPeriod = useSelector(getAllTransactionsForPeriod);
  const { categoriesSummary, expenseSummary, incomeSummary, periodTotal } =
    allTransationsForPeriod;
  const matches = useMediaQuery('(min-width:1280px)');
  const showStatistics = Boolean(expenseSummary && incomeSummary);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTransactionsForPeriodUser({ month: 10, year: 2022 }));
  }, [dispatch]);

  return categoriesSummary ? (
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
  ) : null;
};

export default DiagramTab;
