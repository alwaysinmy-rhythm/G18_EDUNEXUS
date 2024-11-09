import React, { useState } from 'react';
import Coursedata from '../Components/Helper/Coursedata'; // Importing course data
import '../CSS/CR.css';

const CourseCard = ({ course, onClick, isSelected }) => (
  <div className={`course-card ${isSelected ? 'selected' : ''}`} onClick={() => onClick(course)}>
    <div className="course-image-container">
      <img src={course.image} alt={course.title} className="course-image" />
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
        <span>Duration: {course.duration}</span>
        <span>Date: {course.date}</span>
      </div>
      <div className="course-rating">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < course.rating ? 'star filled' : 'star'}>★</span>
        ))}
      </div>
      <div className="course-price">{course.price === "Free" ? "Free" : `$${course.price}`}</div>
    </div>
  </>
);

const CourseRegistration = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [studentCourses, setStudentCourses] = useState(['', '', '', '', '', '']);
  const [formData, setFormData] = useState({
    name: 'Aryan Solanki',
    id: '202201239',
    semester: '5'
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmation = window.confirm('Are you sure you want to submit the form?');
    if (confirmation) {
      alert('Courses registered successfully!');
    }
  };

  return (
    <div className="course-container">
      <div className="header-section">
        <h1 className="course-registration-title">Course Registration</h1>
        <div className="student-info">
          <div className="info-item">
            <span className="info-label">Student Name:</span>
            <span className="info-value">{formData.name}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Student ID:</span>
            <span className="info-value">{formData.id}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Semester:</span>
            <span className="info-value">{formData.semester}</span>
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
          {[...Array(6)].map((_, index) => (
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
          <button type="submit" className="btn-submit">Submit Registration</button>
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
