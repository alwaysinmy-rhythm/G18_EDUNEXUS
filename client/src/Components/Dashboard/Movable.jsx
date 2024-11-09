import React, { useState } from 'react';
import { List, arrayMove } from 'react-movable';
import PropTypes from 'prop-types';
import Calendar from './Calendar';
import DashNotice from './DashNotice';
import { Paper } from '@mui/material';

const ListItem = ({ props, value, isDragged }) => {
  return (
    <li
      {...props}
      style={{
        ...props.style,
        maxWidth: '100%',
        listStyleType: 'none',
        cursor: isDragged ? 'grabbing' : 'grab',
        color: '#333',
        borderRadius: '5px',
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
      }}
    >
      {value}
    </li>
  );
};

ListItem.propTypes = {
  props: PropTypes.shape({
    style: PropTypes.object.isRequired, // Ensure style is validated
    'data-handler-id': PropTypes.string,
    'data-index': PropTypes.number,
    'aria-grabbed': PropTypes.bool,
    'aria-roledescription': PropTypes.string,
    role: PropTypes.string,
    tabIndex: PropTypes.number,
  }).isRequired,
  value: PropTypes.node.isRequired,
  isDragged: PropTypes.bool,
};

ListItem.defaultProps = {
  isDragged: false,
};

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(selectedDate);
  };

  const [items, setItems] = useState([
    <Paper 
      key="calendar"
      sx={{ padding: '0', borderRadius: '20px' }}
    >
      <Calendar date={selectedDate} onChange={handleDateChange} />
    </Paper>,
    <DashNotice key="dash-notice" />
  ]);

  return (
    <div style={{ paddingRight: '10px' }}>
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props, isDragged }) => (
          <ul
            {...props}
            style={{
              padding: 0,
              cursor: isDragged ? 'grabbing' : undefined,
            }}
          >
            {children}
          </ul>
        )}
        renderItem={({ value, props, isDragged }) => (
          <ListItem
            key={props.key}
            props={props}
            value={value}
            isDragged={isDragged}
          />
        )}
      />
    </div>
  );
};




export default App;
