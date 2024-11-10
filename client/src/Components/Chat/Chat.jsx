import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChatIconImage from '../../Images/chatIcon.png';
import '../../CSS/Chat.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('Course 1');
  const [messages, setMessages] = useState(["Welcome! How can we help you?"]); // Example initial message
  const [textMessage, setTextMessage] = useState(''); // Example initial message
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    // Add the new message to the messages array (you can implement your own message sending logic here)
    setMessages((prevMessages) => [...prevMessages, textMessage]);
  };

 const handkeMessageChange = (msg)=>{
    setTextMessage(msg.target.value);
 }

  return (
    <>
      <Box sx={{ '& > :not(style)': { m: 1 }, background: 'transparent' }}>
        <Fab
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            backgroundColor: 'white',
          }}
          onClick={toggleChat}
        >
          <img
            src={ChatIconImage}
            alt="Chat Icon"
            style={{
              width: '100%',
              height: '100%',
              padding: '0px',
            }}
          />
        </Fab>
      </Box>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>
              <Select
                value={value}
                onChange={handleChange}
                sx={{
                  width: '200px',
                  height: '30px',
                  backgroundColor: 'transparent',
                  color: 'black',
                  border: '1px solid black',
                  borderRadius: '5px',
                  marginLeft: '10px',
                }}
              >
                <MenuItem value={'Course 1'}>Course 1</MenuItem>
                <MenuItem value={'Course 2'}>Course 2</MenuItem>
              </Select>
            </span>
            <button onClick={toggleChat} className="close-btn">
              ✖
            </button>
          </div>
          <div className="chat-content" style={{ display: 'flex', flexDirection: 'column', height: '500px', justifyContent: 'space-between' }}>
            <div style={{ flexGrow: 1, overflowY: 'auto', padding: '10px', marginBottom: '10px' }}>
              {messages.map((msg, index) => (
                <p key={index}>{msg}</p> // Display each message
              ))}
            </div>
            <Box sx={{ display: 'flex', borderTop: '1px solid #ccc', padding: '5px' }}>
              <TextField
                id="standard-basic"
                label="Message"
                variant="standard"
                sx={{
                  width: '70%', // Make it smaller
                  marginRight: '10px',
                }}
                // onClick={handleTextMessage}
                onChange={handkeMessageChange}
              />
              <Button variant="contained" endIcon={<SendIcon />} onClick={handleSendMessage} sx={{ height: '40px' }}>
                Send
              </Button>
            </Box>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
