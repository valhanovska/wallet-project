import { useSelector } from 'react-redux';
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
import { useState } from 'react';
// import { getTransaction } from 'redux/transactionsController/trControllerSelector';

export const Table = () => {
  const items = useSelector(
    state => state.transactionsControllers.allTransactions
  );
  const [filtered, SetFiltered] = useState([])
  const [filterFlag, setFilterFlag] =  useState("")
  const [filterTogle, SetfilterTogle] = useState(true)
  console.log(items);
  const category = useSelector(getSelects);
  
  
  function SortTransaction() {
   

    if (filterFlag === "Sum") return filterTogle ? [...items].sort((a, b) => b.amount - a.amount) : [...items].sort((a, b) => a.amount - b.amount)
    if (filterFlag === "Balance") return filterTogle ? [...items].sort((a, b) => b.balanceAfter - a.balanceAfter) : [...items].sort((a, b) => a.balanceAfter - b.balanceAfter)
    if (filterFlag === "Comment") return filterTogle ? [...items].sort((a, b) => b.comment - a.comment) : [...items].sort((a, b) => a.comment - b.comment)
    // if (filterFlag === "Category") filterTogle ? SetFiltered([...items].sort((a, b) => b.find(item => item.categoryId === category.categoryId)?.name.localeCompare(a.find(item => item.categoryId === category.categoryId)?.name))) : SetFiltered([...items].sort((a, b) => a.find(item => item.categoryId === category.categoryId)?.name.localeCompare(b.find(item => item.categoryId === category.categoryId)?.name)))
    if (filterFlag === "Category") return filterTogle ? [...items].sort((a, b) => a.categoryId.localeCompare(b.categoryId) ) : [...items].sort((a, b) => b.categoryId.localeCompare(a.categoryId))
    if (filterFlag === "Date") return filterTogle ? [...items].sort((a, b) => a.transactionDate.split("-").join("") - b.transactionDate.split("-").join("")) : [...items].sort((a, b) => b.transactionDate.split("-").join("") - a.transactionDate.split("-").join(""))
     if (filterFlag === "Type") return filterTogle ? [...items].sort((a, b) => a.type.localeCompare(b.type) ) : [...items].sort((a, b) => b.type.localeCompare(a.type))
     if (filterFlag === "") {return items}
  //   if (input === "Sum") filterTogle ? SetFiltered([...items].sort((a, b) => b.amount - a.amount)) : SetFiltered([...items].sort((a, b) => a.amount - b.amount))
  //   if (input === "Balance") filterTogle ? SetFiltered([...items].sort((a, b) => b.balanceAfter - a.balanceAfter)) : SetFiltered([...items].sort((a, b) => a.balanceAfter - b.balanceAfter))
  //   if (input === "Comment") filterTogle ? SetFiltered([...items].sort((a, b) => b.comment - a.comment)) : SetFiltered([...items].sort((a, b) => a.comment - b.comment))
  //   // if (item === "Category") filterTogle ? SetFiltered([...items].sort((a, b) => b.find(item => item.categoryId === category.categoryId)?.name.localeCompare(a.find(item => item.categoryId === category.categoryId)?.name))) : SetFiltered([...items].sort((a, b) => a.find(item => item.categoryId === category.categoryId)?.name.localeCompare(b.find(item => item.categoryId === category.categoryId)?.name)))
  //   if (input === "Category") filterTogle ? SetFiltered([...items].sort((a, b) => a.categoryId.localeCompare(b.categoryId) )) : SetFiltered([...items].sort((a, b) => b.categoryId.localeCompare(a.categoryId)))
  //   if (input === "Date") filterTogle ? SetFiltered([...items].sort((a, b) => a.transactionDate.split("-").join("")  - b.transactionDate.split("-").join("") )) : SetFiltered([...items].sort((a, b) => b.transactionDate.split("-").join("") - a.transactionDate.split("-").join("") ))
  //   if (input === "Type") filterTogle ? SetFiltered([...items].sort((a, b) => a.type.localeCompare(b.type) )) : SetFiltered([...items].sort((a, b) => b.type.localeCompare(a.type)))
  //  if (input === "") {return items}
    

  }
  console.log(SortTransaction())
  
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
          <img
            src={noTransactionsImg}
            alt="no record available"
            width="400px"
          />
        </div>
      ) : (
        <TableMain>
          <TableHeader>
              <TableHeaderRow onClick={(e) => { setFilterFlag(e.target.innerText); SetfilterTogle(!filterTogle)} }>
              <TableHeadCell> </TableHeadCell>
              <TableHeadCell>date</TableHeadCell>
              <TableHeadCell>type</TableHeadCell>
              <TableHeadCell>category</TableHeadCell>
              <TableHeadCell>comment</TableHeadCell>
              <TableHeadCell>sum</TableHeadCell>
              <TableHeadCell>balance</TableHeadCell>
              {/* <TableHeadCell> </TableHeadCell> */}
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
              {
                // (filtered.length !== 0 ? filtered : items)
                SortTransaction()
                  .map(
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

                  <TableCell>
										<ButtonDelete
                    //  onClick={() => onDelete(_id)}
                     >
											<Trash src={trashSvg} alt="trash" />
										</ButtonDelete>
									</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </TableMain>
      )}
    </>
  );
};
