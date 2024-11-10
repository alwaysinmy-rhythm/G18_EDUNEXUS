import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import SaveAsIcon from '@mui/icons-material/SaveAs';

function createData(name, monday, tuesday, wednesday, thursday, friday) {
  return { name, monday, tuesday, wednesday, thursday, friday };
}

const initialRows = [
  createData('8:00 a.m. to 8:50 a.m.', 159, 6.0, 24, 4.0, 5.0),
  createData('9:00 a.m. to 9:50 a.m.', 237, 9.0, 37, 4.3, 6.0),
  createData('10:00 a.m. to 10:50 a.m.', 262, 16.0, 24, 6.0, 7.0),
  createData('11:00 a.m. to 11:50 a.m.', 305, 3.7, 67, 4.3, 8.0),
  createData('12:00 p.m. to 12:50 p.m.', 356, 16.0, 49, 3.9, 9.0),
];

export default function BasicTable() {
  const [rows, setRows] = useState(initialRows);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (index, column, value) => {
    const updatedRows = [...rows];
    updatedRows[index][column] = value;
    setRows(updatedRows);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <IconButton 
        onClick={handleEditClick} 
        sx={{ 
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          zIndex: 3, 
          bgcolor: 'white', // Background color
          borderRadius: '50%', // Circular button
          boxShadow: 1, // Shadow for better visibility
          opacity: 0.9, // Slight opacity for better visibility
          '&:hover': {
            bgcolor: 'primary.main', // Change background on hover
            opacity: 1, // Full opacity on hover
            color: 'white', // Change text color on hover
          },
        }}
      >
        {isEditing ? <SaveAsIcon /> : <EditIcon />}
      </IconButton>
      
      <TableContainer 
        component={Paper} 
        sx={{ width: '100%', maxHeight: '300px', overflowY: 'auto', borderRadius: '20px', scrollbarWidth: 'thin' }}
      >
        <Table stickyHeader aria-label="sticky table">
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
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '55px' }}
              >
                <TableCell component="th" scope="row" sx={{ minWidth: '250px', width: '250px', maxWidth: '250px' }}>
                  {row.name}
                </TableCell>
                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day) => (
                  <TableCell align="right" key={day}>
                    {isEditing ? (
                      <TextField
                        value={row[day]}
                        onChange={(e) => handleChange(index, day, e.target.value)}
                        size="small"
                      />
                    ) : (
                      row[day]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
