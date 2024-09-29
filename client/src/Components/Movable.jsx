import React, { useState } from 'react';
import { List, arrayMove } from 'react-movable';
import Calendar from './Calendar';
import DashNotice from './DashNotice';
import {Paper} from '@mui/material';
// import {Button} from '@mui/material';
// import EditCalendarIcon from '@mui/icons-material/EditCalendar';



const App = () => {

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange=(date)=>{
    setSelectedDate(date);
    console.log(selectedDate);
  }
  const [items, setItems] = useState([
    <Paper sx={{padding:'0', borderRadius:'20px 20px 20px 20px'}} ><Calendar 
    date={selectedDate}
    onChange={handleDateChange} />
      {/* <Button variant="outlined" startIcon={<EditCalendarIcon sx={{display:'hidden'}}/>}>Add Event</Button> */}
    </Paper>,
    <DashNotice/>
    
  ]);

  return (
    <div
      style={{
        // maxWidth: '100%',

        // maxHeight:'100px',
        // margin: '10px auto',
        // backgroundColor: '#F7F7F7',
        paddingRight: '10px',
        // display: 'inline-block',
        // float:'right',
        // marginRight:'20px',
        // flexWrap:'wrap',
        
      }}
    >
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props, isDragged }) => (
          <ul
            {...props}
            style={{ padding: 0, cursor: isDragged ? 'grabbing' : undefined }}
          >
            {children}
          </ul>
        )}
        renderItem={({ value, props, isDragged, isSelected }) => (
          <li
            {...props}
            key={props.key}
            style={{
              ...props.style,
              // padding: '1.5em',
              maxWidth:'100%',
              // margin: '0.5em 0em',
              
              listStyleType: 'none',
              cursor: isDragged ? 'grabbing' : 'grab',
              // border: '2px solid #CCC',
              // boxShadow: '3px 3px #AAA',
              color: '#333',
              borderRadius: '5px',
              fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
              // backgroundColor: isDragged || isSelected ? '#EEE' : '#FFF',
            }}
          >
            {value}
          </li>
        )}
      />
    </div>
  );
};

export default App;
