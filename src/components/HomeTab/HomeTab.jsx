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

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export function HomeTab() {
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
    <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: "rgba(0, 0, 0, 0)" , border: "0" }}>
      <TableContainer sx={{ maxHeight: 440 , backgroundColor: "rgba(0, 0, 0, 0)", border: "0"}}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                      align={column.align}
                      style={{ maxHeight: 440 , backgroundColor: "rgba(0, 0, 0, 0)",border: "0" }}
                //   style={{ minWidth: column.minWidth , }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {categories
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} >
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
        rowsPerPageOptions={[10, 50, { value: rows.length , label: 'All' }]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
 
export default HomeTab;