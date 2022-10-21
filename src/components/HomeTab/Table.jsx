import {  useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';
import {
  TableMain,
  TableHeader,
  TableHeaderRow,
  TableBody,
  TableRow,
  TableHeadCell,
  TableCell,
  TableCellColor,
  ButtonDelete,
  Trash,
} from './Table.styled';

import trashSvg from '../../assets/icons/trash.svg';
import noTransactionsImg from '../../assets/images/no-record-available.png';
import spaceCreator from 'servises/spaceCreator';

import { getSelects } from 'redux/transactionCategories/selectorsTransactions';


export const Table = ({ items }) => {
  const category = useSelector(getSelects);

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    justifyContentItems: 'center',
    alignItems: 'center',
    gap: '20px',
    color: '#4A56E2',
  };

  const normTime = data => {
    const year = data?.slice(0, 4);
    const month = data?.slice(5, 7);
    const day = data?.slice(8, 10);

    return `${day}.${month}.${year}`;
  };

  // const onDelete = _id => {
  // 	dispatch(transactionsOperation.deleteTransactions(_id));
  // };

  return (
    <>
      {items?.length === 0 ? (
        <div style={styles}>
          <h2>Sorry, you don't have any transactions yet</h2>
          <img src={noTransactionsImg} alt="no record available" width='400px' />
        </div>
      ) : (
        <TableMain>
          <TableHeader>
            <TableHeaderRow>
              <TableHeadCell>date</TableHeadCell>
              <TableHeadCell>type</TableHeadCell>
              <TableHeadCell>category</TableHeadCell>
              <TableHeadCell>comment</TableHeadCell>
              <TableHeadCell>sum</TableHeadCell>
              <TableHeadCell>balance</TableHeadCell>
              <TableHeadCell> </TableHeadCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {items.map(
              ({
                id,
                transactionDate,
                type,
                categoryId,
                comment,
                amount,
                balanceAfter,
              }) => (
                <TableRow key={id}>
                  <TableCell>
                    {transactionDate && normTime(transactionDate)}
                  </TableCell>
                  <TableCell>{type !== 'EXPENSE' ? '+' : '-'}</TableCell>
                  <TableCell>
                    {category?.find(item => item.id === categoryId)?.name}
                  </TableCell>
                  <TableCell>
                    {comment && <EllipsisText length={10} text={comment} />}
                  </TableCell>
                  <TableCell>
                    <TableCellColor
                      type={type !== 'EXPENSE' ? 'INCOME' : 'EXPENSE'}
                    >
                      {
                        // isLoading
                        typeof amount === 'number' ? (
                          <EllipsisText
                            length={10}
                            text={spaceCreator(amount)}
                          />
                        ) : (
                          <p>...</p>
                        )
                      }
                    </TableCellColor>
                  </TableCell>
                  <TableCell>
                    {typeof balanceAfter === 'number' ? (
                      <EllipsisText
                        length={10}
                        text={spaceCreator(balanceAfter)}
                      />
                    ) : (
                      <p>...</p>
                    )}
                  </TableCell>
                  
                  {/* <TableCell>
										<ButtonDelete onClick={() => onDelete(_id)}>
											<Trash src={trashSvg} alt="trash" />
										</ButtonDelete>
									</TableCell> */}
                </TableRow>
              )
            )}
          </TableBody>
        </TableMain>
      )}
    </>
  );
};
