import React, { useEffect, useState } from 'react';
import { List, arrayMove } from 'react-movable';
import PropTypes from 'prop-types';
import DashNotice from './DashNotice';
import { Paper } from '@mui/material';
import Calendar from './Calendar';

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

const Movable = ({ notice }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // console.log('Notice data from movable:', notice);

    // Update the items array when notice changes
    setItems([
      <Paper key="calendar" sx={{ padding: '0', borderRadius: '20px' }}>
        {/* You can enable the Calendar component if needed */}
        <Calendar  />
      </Paper>,
      <Paper key="Notice" sx={{ padding: '0', borderRadius: '20px' }}>
        <DashNotice noticeTitle={notice} />
      </Paper>
    ]);
  }, [notice]);

  return (
    <div style={{ paddingRight: '10px' }}>
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) => setItems(arrayMove(items, oldIndex, newIndex))}
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
          <ListItem props={props} value={value} isDragged={isDragged} />
        )}
      />
    </div>
  );
};

export default Movable;