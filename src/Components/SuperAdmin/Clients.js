import React, { useState } from 'react';
import {
  Button, Grid, TableHead, Chip,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

const TableHeadStyle = {
  fontSize: '1.2rem', fontWeight: 'bold', color: 'grey',
};

function TablePaginationActions(props) {
  const theme = useTheme();
  const {
    count, page, rowsPerPage, onPageChange,
  } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(slno, regdate, name, contact, country, status) {
  return {
    slno, regdate, name, contact, country, status,
  };
}

const rows = [
  createData(1, '29-6-22', 'keerthana', 9985477502, 'India', 'Approved'),
  createData(2, '29-6-22', 'keerthana', 9985477502, 'India', 'Approved'),
  createData(3, '29-6-22', 'keerthana', 9985477502, 'India', 'Approved'),
  createData(4, '29-6-22', 'keerthana', 9985477502, 'India', 'Approved'),
  createData(5, '29-6-22', 'keerthana', 9985477502, 'India', 'Approved'),
  createData(6, '29-6-22', 'keerthana', 9985477502, 'India', 'Pending'),
  createData(7, '29-6-22', 'keerthana', 9985477502, 'India', 'Approved'),
  createData(8, '29-6-22', 'keerthana', 9985477502, 'India', 'Approved'),
  createData(9, '29-6-22', 'keerthana', 9985477502, 'India', 'Approved'),
  createData(10, '29-6-22', 'keerthana', 9985477502, 'India', 'Pending'),
  createData(11, '29-6-22', 'keerthana', 9985477502, 'India', 'Pending'),
  createData(12, '29-6-22', 'Keerthana', 9985477502, 'India', 'Approved'),

].sort((a, b) => (a.slno < b.slno ? 1 : -1));

function Clients() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Grid width="100%" height="92vh" sx={{ backgroundColor: '#E6E7E9' }}>
      <Grid container justifyContent="space-between" height="60px">
        <Grid xs={7}>
          something
        </Grid>
        <Grid xs={5}>
          something
        </Grid>
      </Grid>
      <Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableCell style={TableHeadStyle} align="center">
                S.No
              </TableCell>
              <TableCell align="center" style={TableHeadStyle}>
                Reg Date
              </TableCell>
              <TableCell align="center" style={TableHeadStyle}>
                client name
              </TableCell>
              <TableCell align="center" style={TableHeadStyle}>
                contact
              </TableCell>
              <TableCell align="center" style={TableHeadStyle}>
                country
              </TableCell>
              <TableCell align="center" style={TableHeadStyle}>
                status
              </TableCell>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row) => (
                <TableRow key={row.slno}>
                  <TableCell style={{ width: 50, fontSize: '1.1rem' }} align="center">
                    {row.slno}
                  </TableCell>
                  <TableCell style={{ width: 50, fontSize: '1.08rem' }} align="center">
                    {row.regdate}
                  </TableCell>
                  <TableCell style={{ width: 100, fontSize: '1.1rem' }} align="center">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ width: 100, fontSize: '1.06rem' }} align="center">
                    {row.contact}
                  </TableCell>
                  <TableCell style={{ width: 100, fontSize: '1.1rem' }} align="center">
                    {row.country}
                  </TableCell>
                  <TableCell style={{ width: 100, fontSize: '1.1rem', fontWeight: 'bold' }} align="center">
                    {row.status === 'Approved' ? (<Chip label={row.status} variant="contained" style={{ backgroundColor: '#E5F6DF', color: '#68E98D' }} />) : (<Chip label={row.status} variant="contained" style={{ backgroundColor: '#F2CFD0', color: '#F2332F' }} />)}
                  </TableCell>
                  <TableCell style={{ width: 100 }} align="center">
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: '6px',
                        color: '#000',
                        backgroundColor: '#68E98D',
                        '&:hover': {
                          backgroundColor: '#68E98D',
                        },
                      }}
                    >
                      view
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[7, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default Clients;
