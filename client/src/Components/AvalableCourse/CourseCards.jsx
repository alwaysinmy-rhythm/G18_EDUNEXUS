import React from 'react'
import { Button, Paper } from '@mui/material'
import { Typography } from '@mui/material'
import {Box} from '@mui/material'
import Modal from '@mui/material/Modal'

const imgeCss = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  marginBottom: '1rem',
  borderRadius: '10px',
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CourseCards(course) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
   <>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          padding: '1rem',
          margin: '1rem',
          width: '300px',
          height: '350px',
          cursor: 'pointer',
          textAlign:'left',
          border:'2px solid blue',
          overflow:'hidden',
        }}
      >
        <img src={course.image} alt={course.title} style={imgeCss}/>
        
        <Typography sx={{border:'2px solid red'}}>
          {course.title}
          <br></br>
          Professor : {course.Prof} 
          <br></br>
          Credits : {course.Credits}        
        </Typography>
        <Button onClick={handleOpen}>
          View Info
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      </Paper>
   </>
  )
}

export default CourseCards