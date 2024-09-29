import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, monday, tuesday, wednesday, thursday, friday) {
  return { name, monday, tuesday, wednesday, thursday, friday };
}

const rows = [
  createData('8:00 a.m. to 8:50 a.m.', 159, 6.0, 24, 4.0, 5.0),
  createData('9:00 a.m. to 9:50 a.m.', 237, 9.0, 37, 4.3, 6.0),
  createData('10:00 a.m. to 10:50 a.m.', 262, 16.0, 24, 6.0, 7.0),
  createData('11:00 a.m. to 11:50 a.m.', 305, 3.7, 67, 4.3, 8.0),
  createData('12:00 p.m. to 12:50 p.m.', 356, 16.0, 49, 3.9, 9.0),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ width: '100%', maxHeight: '450px', overflowY: 'auto', borderRadius:'20px 20px 20px 20px',scrollbarWidth: 'thin', }}>
      <Table stickyHeader aria-label="sticky table" >
        <TableHead>
          <TableRow>
            <TableCell sx={{ minWidth: '250px', width: '250px', maxWidth: '250px' }}>Time</TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },
              height: '55px',
            }}
            >
              <TableCell component="th" scope="row" sx={{ minWidth: '250px', width: '250px', maxWidth: '250px' }}>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.monday}</TableCell>
              <TableCell align="right">{row.tuesday}</TableCell>
              <TableCell align="right">{row.wednesday}</TableCell>
              <TableCell align="right">{row.thursday}</TableCell>
              <TableCell align="right">{row.friday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
