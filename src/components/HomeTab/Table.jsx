import { useDispatch, useSelector } from 'react-redux';
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
import editSvg from '../../assets/icons/symbol-defs.svg';
import trashSvg from '../../assets/icons/trash.svg';
import noTransactionsImg from '../../assets/images/no-record-available.png';
import spaceCreator from 'servises/spaceCreator';

import { getSelects } from 'redux/transactionCategories/selectorsTransactions';
import { useState } from 'react';
import { removeTransactionUser } from 'redux/transactionsController/trControllerOpertaion';
import { editeNewContact } from 'redux/transactionsController/trControllerSlice';
// import { editTransaction } from 'servises/transactionsApi';
// import { getTransaction } from 'redux/transactionsController/trControllerSelector';

export const Table = ({ handleClick }) => {
  const dispatch = useDispatch();
  const items = useSelector(
    state => state.transactionsControllers.allTransactions
  );
  const [filterFlag, setFilterFlag] = useState('');
  const [filterTogle, SetfilterTogle] = useState(true);
  const category = useSelector(getSelects);

  function SortTransaction() {
    if (filterFlag.innerText === 'Sum')
      return filterTogle
        ? [...items].sort((a, b) => b.amount - a.amount)
        : [...items].sort((a, b) => a.amount - b.amount);
    if (filterFlag.innerText === 'Balance')
      return filterTogle
        ? [...items].sort((a, b) => b.balanceAfter - a.balanceAfter)
        : [...items].sort((a, b) => a.balanceAfter - b.balanceAfter);
    if (filterFlag.innerText === 'Comment')
      return filterTogle
        ? [...items].sort((a, b) => b.comment - a.comment)
        : [...items].sort((a, b) => a.comment - b.comment);
    // if (filterFlag === "Category") filterTogle ? SetFiltered([...items].sort((a, b) => b.find(item => item.categoryId === category.categoryId)?.name.localeCompare(a.find(item => item.categoryId === category.categoryId)?.name))) : SetFiltered([...items].sort((a, b) => a.find(item => item.categoryId === category.categoryId)?.name.localeCompare(b.find(item => item.categoryId === category.categoryId)?.name)))
    if (filterFlag.innerText === 'Category')
      return filterTogle
        ? [...items].sort((a, b) => a.categoryId.localeCompare(b.categoryId))
        : [...items].sort((a, b) => b.categoryId.localeCompare(a.categoryId));
    if (filterFlag.innerText === 'Date')
      return filterTogle
        ? [...items].sort(
            (a, b) =>
              a.transactionDate.split('-').join('') -
              b.transactionDate.split('-').join('')
          )
        : [...items].sort(
            (a, b) =>
              b.transactionDate.split('-').join('') -
              a.transactionDate.split('-').join('')
          );
    if (filterFlag.innerText === 'Type')
      return filterTogle
        ? [...items].sort((a, b) => a.type.localeCompare(b.type))
        : [...items].sort((a, b) => b.type.localeCompare(a.type));

    return items;
    //   if (input === "Sum") filterTogle ? SetFiltered([...items].sort((a, b) => b.amount - a.amount)) : SetFiltered([...items].sort((a, b) => a.amount - b.amount))
    //   if (input === "Balance") filterTogle ? SetFiltered([...items].sort((a, b) => b.balanceAfter - a.balanceAfter)) : SetFiltered([...items].sort((a, b) => a.balanceAfter - b.balanceAfter))
    //   if (input === "Comment") filterTogle ? SetFiltered([...items].sort((a, b) => b.comment - a.comment)) : SetFiltered([...items].sort((a, b) => a.comment - b.comment))
    //   // if (item === "Category") filterTogle ? SetFiltered([...items].sort((a, b) => b.find(item => item.categoryId === category.categoryId)?.name.localeCompare(a.find(item => item.categoryId === category.categoryId)?.name))) : SetFiltered([...items].sort((a, b) => a.find(item => item.categoryId === category.categoryId)?.name.localeCompare(b.find(item => item.categoryId === category.categoryId)?.name)))
    //   if (input === "Category") filterTogle ? SetFiltered([...items].sort((a, b) => a.categoryId.localeCompare(b.categoryId) )) : SetFiltered([...items].sort((a, b) => b.categoryId.localeCompare(a.categoryId)))
    //   if (input === "Date") filterTogle ? SetFiltered([...items].sort((a, b) => a.transactionDate.split("-").join("")  - b.transactionDate.split("-").join("") )) : SetFiltered([...items].sort((a, b) => b.transactionDate.split("-").join("") - a.transactionDate.split("-").join("") ))
    //   if (input === "Type") filterTogle ? SetFiltered([...items].sort((a, b) => a.type.localeCompare(b.type) )) : SetFiltered([...items].sort((a, b) => b.type.localeCompare(a.type)))
    //  if (input === "") {return items}
  }

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    justifyContentItems: 'center',
    alignItems: 'center',
    gap: '20px',
    color: '#4A56E2',
    width: '715px',
    height: '545px',
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
  const onEditBatton = id => {
    handleClick();

    const data = items.filter(item => item.id === id);
    dispatch(editeNewContact(data));
  };

  return (
    <>
      {items?.length === 0 ? (
        <div style={styles}>
          <h2>Sorry, you don't have any transactions yet</h2>
          <img
            src={noTransactionsImg}
            alt="no record available"
            width="400px"
          />
        </div>
      ) : (
        <TableMain>
          <TableHeader>
            <TableHeaderRow
              data-tipe
              onClick={e => {
                setFilterFlag(e.target);
                SetfilterTogle(!filterTogle);
              }}
            >
              <TableHeadCell> </TableHeadCell>
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
            {
              // (filtered.length !== 0 ? filtered : items)
              SortTransaction()?.map(
                ({
                  id,
                  transactionDate,
                  type,
                  categoryId,
                  comment,
                  amount,
                  balanceAfter,
                }) => (
                  <TableRow id={id} key={id}>
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

                    <TableCell id={id} onClick={e => onEditBatton(e.target.id)}>
                      <ButtonDelete>
                        <Trash src={editSvg} alt="trash" id={id} />
                      </ButtonDelete>
                    </TableCell>
                    <TableCell
                      id={id}
                      onClick={e =>
                        dispatch(removeTransactionUser(e.target.id))
                      }
                    >
                      <ButtonDelete>
                        <Trash src={trashSvg} alt="trash" id={id} />
                      </ButtonDelete>
                    </TableCell>
                  </TableRow>
                )
              )
            }
          </TableBody>
        </TableMain>
      )}
    </>
  );
};
