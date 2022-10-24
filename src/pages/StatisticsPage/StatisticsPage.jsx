import { useEffect } from 'react';
import StatisticsChart from '../../components/Chart/Chart';
import StatisticsTable from './Table/Table';
import { Container, Title } from './StatisticsPage.styled';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactionsForPeriod } from 'redux/transactionSummaryController/trSummarySelector';
import { getAllTransactionsForPeriodUser } from 'redux/transactionSummaryController/trSummaryOperation';

const DiagramTab = () => {
  const allTransationsForPeriod = useSelector(getAllTransactionsForPeriod);
  const { categoriesSummary, expenseSummary, incomeSummary, periodTotal } =
    allTransationsForPeriod;
  const showStatistics = Boolean(expenseSummary || incomeSummary);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactionsForPeriodUser({ month: new Date().getMonth()+1, year: new Date().getFullYear() }));
  }, [dispatch]);

  return categoriesSummary ? (
    <Stack
      // sx={{ px: '20px', pl: matches ? '69px' : undefined }}
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
