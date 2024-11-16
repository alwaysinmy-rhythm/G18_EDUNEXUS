import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coursedata from '../Components/Helper/Coursedata.json'; // Importing course data
import '../CSS/CR.css';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';

const ENDPOINT="http://localhost:3001";
const CourseCard = ({ course, onClick, isSelected }) => (
  <div className={`course-card ${isSelected ? 'selected' : ''}`} onClick={() => onClick(course)}>
    <div className="course-icon-container">
      <AutoStoriesRoundedIcon className="course-icon" fontSize="large" />
      {isSelected && <div className="selected-overlay">Selected</div>}
    </div>
    <h2>{course.title}</h2>
  </div>
);

const CourseModal = ({ course, onClose }) => (
  <>
    <div className="course-modal-overlay" onClick={onClose}></div>
    <div className="course-modal">
      <button className="course-modal-close" onClick={onClose}>&times;</button>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <div className="course-info">
        <span>Course ID: {course.course_code}</span>
        <span>Semester: {course.semester}</span>
        <span>Year: {course.year}</span>
        <span>Credit: {course.credit}</span>
        <span>Professor: {course.professor}</span>
      </div>
    </div>
  </>
);

const CourseRegistration = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [studentCourses, setStudentCourses] = useState([]);
  const [formData, setFormData] = useState({
    name: 'Aryan Solanki',
    id: '202201239',
    semester: '5'
  });

  useEffect(() => {
    const sid = 'S001';
    /*Cookies.get('sid') */ ;
    if (sid) {
      const fetchStudentInfo = async () => {
        try {
          const response = await axios.get(`${ENDPOINT}/api/user/course_registration?sid=${sid}`);
          //console.log(response.data);
          const { studentInfo, courses } = response.data;
          setFormData(studentInfo);
          setStudentCourses(courses);
          console.log(studentInfo);
          console.log(courses);
        } catch (error) {
          console.error('Error fetching student info:', error);
        }
      };
      
      // Call the async function
      fetchStudentInfo();
      
    }
  }, []);

  const handleCourseClick = (course) => setSelectedCourse(course);
  const handleModalClose = () => setSelectedCourse(null);

  const handleCourseSelection = (index, courseId) => {
    const newCourses = [...studentCourses];
    newCourses[index] = courseId;
    setStudentCourses(newCourses);
  };

  const handleReset = () => {
    setStudentCourses(['', '', '', '', '', '']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if exactly 5 preferences are selected (no empty strings in the array)
    if (studentCourses.some(course => course === '')) {
      alert('Please select all 5 preferences before submitting.');
      return;
    }
    
    // Confirm submission
    const confirmation = window.confirm('Are you sure you want to submit the form?');
    
    if (confirmation) {
      try {
        const response = await axios.post(`${ENDPOINT}/api/user/course_registration`, {
          studentId: formData.id,
          name: formData.name,
          semester: formData.semester,
          courses: studentCourses
        });
        
        if (response.status === 200) {
          alert('Courses registered successfully!');
        }
      } catch (error) {
        console.error('Error during course registration:', error);
        alert('Failed to register courses. Please try again.');
      }
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const confirmation = window.confirm('Are you sure you want to submit the form?');
  //   if (confirmation) {
  //     alert('Courses registered successfully!');
  //   }
  // };

  return (
    <div className="course-container">
      <div className="header-section">
        <h1 className="course-registration-title">Course Registration</h1>
        <div className="student-info">
          <div className="info-item">
            <span className="info-label">Student Name:</span>
            <span className="info-value">{formData.sid}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Student ID:</span>
            <span className="info-value">{formData.sid}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Batch:</span>
            <span className="info-value">{formData.year}</span>
          </div>
        </div>
      </div>

      <div className="courses-grid">
        {Coursedata.map((course) => (
          <CourseCard
            key={course.CID}
            course={course}
            onClick={handleCourseClick}
            isSelected={studentCourses.includes(course.CID)}
          />
        ))}
      </div>

      <form className="course-selection-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="form-group">
              <label htmlFor={`course${index + 1}`}>Course {index + 1}</label>
              <select
                id={`course${index + 1}`}
                value={studentCourses[index]}
                onChange={(e) => handleCourseSelection(index, e.target.value)}
              >
                <option value="">-- Select a Course --</option>
                {Coursedata.map(course => (
                  <option 
                    key={course.CID} 
                    value={course.CID}
                    disabled={studentCourses.includes(course.CID) && studentCourses[index] !== course.CID}
                  >
                    {course.title}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="btn-submit"
            disabled={studentCourses.includes('')}
          >
            Submit Registration
          </button>
          <button type="button" className="btn-reset" onClick={handleReset}>Reset Selection</button>
        </div>

      </form>

      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default CourseRegistration;
