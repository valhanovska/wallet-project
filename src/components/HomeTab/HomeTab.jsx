import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination, { } from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { categories } from 'db';
import { useSelector } from 'react-redux';
import { getAlltransactions } from 'redux/transactionsController/trControllerSelector';


const columns = [
  { id: 'transactionDate', label: 'Date', minWidth: 100 },
  { id: 'type', label: 'Type', minWidth: 100 ,},
  {
    id: 'categoryId',
    label: 'Category',
    minWidth: "100px",
    align: 'right',
  },
  {
    id: 'comment',
    label: 'Comment',
    minWidth: "56px",
    align: 'right',
    },
   {
    id: 'amount',
    label: 'Sum',
    minWidth: "56px",
    align: 'right',
  },
  {
    id: 'balanceAfter',
    label: 'Balance',
    minWidth: 70,
    align: 'right',
  },
];

export function HomeTab() {

const transactions = useSelector(getAlltransactions)
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper style={{ width: '100%', overflow: 'hidden', backgroundColor: "rgba(0, 0, 0, 0)" , boxShadow:'none'}}>
          <TableContainer sx={{ maxHeight: 440, }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead  sx={{ maxHeight: 440 , backgroundColor: "white", borderRadius: "30px", }} >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                      align={column.align}
                      style={{ maxHeight: 440 ,  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ maxHeight: 440 , backgroundColor: "rgba(0, 0, 0, 0)" }}>
           {categories      //transactions Tut vmesto  categories  //* 
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} style={{ maxHeight: 440 , backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: "30px",}}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ maxHeight: 440 , backgroundColor: "rgba(0, 0, 0, 0)", border: "15px", }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 50, { value: transactions.length , label: 'All' }]}
        component="div"
        count={transactions.length}
        rowsPerPage={rowsPerPage}
        
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
 
export default HomeTab;