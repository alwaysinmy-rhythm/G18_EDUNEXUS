import React from 'react'
import Coursedata from '../Components/Helper/Coursedata.json'
import CourseCard from '../Components/AvalableCourse/CourseCards'
import { Box } from '@mui/material'

function AllCourse() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      padding: '1rem',
    }}>
      
        {
          Coursedata.map(course => (
            <CourseCard key={course.CID} title={course.title} Prof={course.Prof}  image ={course.image} Credits = {course.Credits}/>
          ))
        }
     
    </Box>
  )
}

export default AllCourse