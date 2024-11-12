import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, TextField, Button, Grid, Box, Divider, RadioGroup, FormControlLabel, Radio, Modal, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/system';
import { CheckCircle } from '@mui/icons-material';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #1c54b2, #39a6e7)', // Blue gradient
  color: '#fff',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(4),
}));

const Scholarship = () => {
  const [eligibility, setEligibility] = useState('');
  const [isEligible, setIsEligible] = useState(null);
  const [applicationData, setApplicationData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    university: 'Example University',
    program: '',
    statement: '',
    phone: '',
    age: '',
    previousScholarship: '',
    currentGPA: '',
  });
  const [openModal, setOpenModal] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [requiredGPA, setRequiredGPA] = useState(3.5); // Example GPA requirement

  useEffect(() => {
    const deadline = new Date('2024-06-30');
    const today = new Date();
    const difference = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
    setDaysLeft(difference);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
  };

  const checkEligibility = () => {
    const { age, currentGPA, previousScholarship } = applicationData;
    const isEligibleForScholarship = age >= 18 && currentGPA >= requiredGPA && previousScholarship === 'no';
    setIsEligible(isEligibleForScholarship);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
    setShowSnackbar(true);
  };

  const closeModal = () => setOpenModal(false);

  return (
    <StyledContainer maxWidth="lg">
      {/* Header Section */}
      <HeaderSection>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Scholarship Application Portal</Typography>
        <Typography variant="subtitle1">Apply for the *Excellence in Education Scholarship* to empower your academic success.</Typography>
        <Typography variant="body2">Application Deadline: <strong>June 30, 2024</strong></Typography>
        <Typography variant="h5" sx={{ marginTop: 2, color: '#FF7043' }}>
          <strong>Days Left to Apply: {daysLeft}</strong>
        </Typography>
      </HeaderSection>

      {/* Scholarship Details Section */}
      <Paper elevation={4} sx={{ padding: 4, marginBottom: 4, backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4" gutterBottom>Scholarship Details</Typography>
        <Typography paragraph>
          The *Excellence in Education Scholarship* is designed for outstanding students who demonstrate academic excellence, leadership, and a commitment to community service. This scholarship aims to help students achieve their educational and career goals by reducing financial barriers.
        </Typography>
        <Typography variant="h5" gutterBottom>Eligibility Criteria</Typography>
        <Typography paragraph>
          <ul>
            <li>Must be a full-time undergraduate or graduate student.</li>
            <li>Minimum GPA of 3.5 on a 4.0 scale.</li>
            <li>Engagement in leadership activities and community service.</li>
            <li>Submission of a statement of purpose and required documents.</li>
          </ul>
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h5" gutterBottom>Scholarship Amount</Typography>
        <Typography paragraph>Recipients will be awarded up to $5,000 for tuition and educational expenses.</Typography>
      </Paper>

      {/* Eligibility Check Section */}
      <Paper elevation={4} sx={{ padding: 4, marginBottom: 4, backgroundColor: '#f0f8ff' }}>
        <Typography variant="h4" gutterBottom>Check Your Eligibility</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={applicationData.age}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Current GPA"
              name="currentGPA"
              type="number"
              value={applicationData.currentGPA}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Have you received a previous scholarship?</Typography>
            <RadioGroup
              name="previousScholarship"
              value={applicationData.previousScholarship}
              onChange={handleRadioChange}
              row
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={checkEligibility}
            >
              <CheckCircle sx={{ marginRight: 1 }} /> Check Eligibility
            </Button>
          </Grid>
        </Grid>
        {isEligible !== null && (
          <Typography variant="body1" sx={{ marginTop: 2, color: isEligible ? 'green' : 'red' }}>
            {isEligible ? 'You are eligible for the scholarship!' : 'You do not meet the eligibility criteria.'}
          </Typography>
        )}
      </Paper>

      {/* Application Form Section */}
      {isEligible && (
        <Paper elevation={4} sx={{ padding: 4, marginBottom: 5, backgroundColor: '#f9f9f9' }}>
          <Typography variant="h4" gutterBottom>Application Form</Typography>
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  defaultValue={applicationData.fullName}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  defaultValue={applicationData.email}
                  type="email"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="University/Institution Name"
                  defaultValue={applicationData.university}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Program of Study"
                  name="program"
                  value={applicationData.program}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Statement of Purpose"
                  name="statement"
                  value={applicationData.statement}
                  onChange={handleInputChange}
                  required
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={applicationData.phone}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  type="file"
                  multiple
                  style={{ padding: '10px' }}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" sx={{ marginTop: 3 }}>
              Submit Application
            </Button>
          </form>
        </Paper>
      )}

      {/* Modal to show submission success */}
      <Modal open={openModal} onClose={closeModal}>
        <Box sx={{ padding: 4, backgroundColor: 'white', borderRadius: 2, maxWidth: 400, margin: 'auto', marginTop: '20%' }}>
          <Typography variant="h6" gutterBottom>Success!</Typography>
          <Typography variant="body1">Your application has been successfully submitted. You will be notified via email.</Typography>
          <Button variant="contained" onClick={closeModal} sx={{ marginTop: 2 }}>Close</Button>
        </Box>
      </Modal>

      {/* Success Snackbar */}
      <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={() => setShowSnackbar(false)}>
        <Alert onClose={() => setShowSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Application submitted successfully!
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};

export default Scholarship;
