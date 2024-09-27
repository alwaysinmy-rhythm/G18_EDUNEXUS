import React, { useState } from 'react';
import { List, arrayMove } from 'react-movable';
import Calendar from './Calender';
import ProgressBar from './ProgressBar';
import {Paper} from '@mui/material';

const App = () => {
  const [items, setItems] = useState([
    <Paper sx={{padding:'0'}} ><Calendar /></Paper>,
    <ProgressBar/>
    
  ]);

  return (
    <div
      style={{
        // maxWidth: '100%',

        // maxHeight:'100vh',
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
              border: '2px solid #CCC',
              // boxShadow: '3px 3px #AAA',
              color: '#333',
              borderRadius: '5px',
              fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
              backgroundColor: isDragged || isSelected ? '#EEE' : '#FFF',
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
