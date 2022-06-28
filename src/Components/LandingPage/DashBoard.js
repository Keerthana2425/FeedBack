import * as React from 'react';
import debounce from 'lodash.debounce';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Grid, OutlinedInput } from '@mui/material';
import { useMemo, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const columns = [
  {
    id: 'name', label: 'Name', minWidth: 170, align: 'center',
  },
  {
    id: 'code', label: 'ISO\u00a0Code', minWidth: 170, align: 'center',
  },
  {
    id: 'population',
    label: 'Population',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  // {
  //   id: 'density',
  //   label: 'Density',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value) => value.toFixed(2),
  // },
];

function createData(name, code, population, size) {
  // const density = population / size;
  return {
    name, code, population, size,
  };
}

const rowsData = [
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

export default function ColumnGroupingTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  let rows = rowsData;
  if (searchTerm !== '') {
    rows = rows.filter((row) => row.name.includes(searchTerm));
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const debouncedResults = useMemo(() => debounce(handleChange, 300), []);

  useEffect(() => () => {
    debouncedResults.cancel();
  });

  return (
    <Paper sx={{ height: '95%', paddingTop: '3%' }}>
      <Grid
        container
        sx={{
          height: '48px', padding: '0% 3%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Grid item>
          recent FeedBack
        </Grid>
        <Grid item>
          <OutlinedInput
            onChange={debouncedResults}
            type="search"
            placeholder="search"
            endAdornment={<SearchIcon fontSize="small" sx={{ color: '#9F9F9F' }} />}
            sx={{
              height: '34px',
              // '&:hover': {
              //   border: 'none',
              // },
              // '&:active': {
              //   border: 'none',
              // },
            }}
          />
          date
        </Grid>
      </Grid>
      <Paper sx={{ width: '100%', marginTop: '3%' }}>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Dessert (100g serving)</TableCell>
                <TableCell align="center">Calories</TableCell>
                <TableCell align="center">Fat&nbsp;(g)</TableCell>
                <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[6, 12]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Paper>

  );
}
