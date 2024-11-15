import React, { useState } from 'react';
import '../CSS/Profile.css';
import logo from '../Images/logo.png';
import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';



const Profile = () => {
    const [formData, setFormData] = useState({
        studentId: '',
        firstName: '',
        lastName: '',
        fatherName: '',
        motherName: '',
        dob: '',
        nationality: '',
        gender: '',
        instituteEmail: '',
        personalEmail: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        program: '',
        gradYear: '',
        tenthGrade: '',
        twelfthGrade: '',
        jeeMains: '',
        jeeAdv: '',
        disabilities: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can replace this with an API call.
        alert('Form submitted!');
    };

    return (
        <div className="container">
            <div className="header">
                <img src={logo} alt="University Logo" />
            </div>
            <form className="profile" onSubmit={handleSubmit}>
                <h2>Student Profile</h2>

                {/* Personal Information */}
                <fieldset>
                    <legend className="personal">Personal Information</legend>
                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="Student ID Number"
                            variant="standard"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleChange}
                            fullWidth
                            // InputLabelProps={{
                            //     style: {
                            //         color: 'white', // Set label color to white
                            //     },
                            // }}
                        />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="First Name"
                            variant="standard"
                            name="first-name"
                            value={formData.firstName}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                        <div className="form-group">
                        <TextField
                            label="Last Name"
                            variant="standard"
                            name="lastname"
                            value={formData.lastName}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="Father's Name"
                            variant="standard"
                            name="father-name"
                            value={formData.fatherName}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                        <div className="form-group">
                        <TextField
                            label="Mother's Name"
                            variant="standard"
                            name="mother-name"
                            value={formData.motherName}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="Date of Birth"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard" 
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            fullWidth
                        />

                        </div>
                        <div className="form-group">
                        <TextField
                            label="Nationality"
                            variant="standard"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <div className="radio-button-group">
                            <label><input type="radio" name="gender" value="female" onChange={handleChange} /> Female</label>
                            <label><input type="radio" name="gender" value="male" onChange={handleChange} /> Male</label>
                            <label><input type="radio" name="gender" value="other" onChange={handleChange} /> Other</label>
                            <label><input type="radio" name="gender" value="prefer-not" onChange={handleChange} /> Prefer not to say</label>
                        </div>
                    </div>
                </fieldset>

                {/* Contact Information */}
                <fieldset>
                    <legend className="contact">Contact Information</legend>
                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="Institute'e Email"
                            variant="standard"
                            name="institute-email"
                            value={formData.instituteEmail}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                        <div className="form-group">
                        <TextField
                            label="{Personal Email}"
                            variant="standard"
                            name="personal-email"
                            value={formData.personalEmail}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="Mobile Number"
                            variant="standard"
                            name="mobile-number"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                        <div className="form-group">
                        <TextField
                            label="Street Address"
                            variant="standard"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="City"
                            variant="standard"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                        <div className="form-group">
                        <TextField
                            label="State"
                            variant="standard"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="Postal/Zip Code"
                            variant="standard"
                            name="zipcode"
                            value={formData.zipcode}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                        <div className="form-group">
                        <TextField
                            label="Country"
                            variant="standard"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                    </div>
                </fieldset>

                {/* Enrollment Details */}
                <fieldset>
                    <legend className="enrollment">Enrollment Details</legend>
                    <div className="form-row">
                       
                    <div className="form-group">
                        <FormControl variant="standard" fullWidth>
                            <InputLabel id="program-label">Program of Study</InputLabel>
                            <Select
                                labelId="program-label"
                                id="program"
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                            >
                            <MenuItem value="B Tech ICT">B Tech ICT</MenuItem>
                            <MenuItem value="B Tech ICT + CS">B Tech ICT + CS</MenuItem>
                            <MenuItem value="B Tech EVD">B Tech EVD</MenuItem>
                            <MenuItem value="B Tech ICT + Minors in Robotics">B Tech ICT + Minors in Robotics</MenuItem>
                            <MenuItem value="M Tech Machine Learning">M Tech Machine Learning</MenuItem>
                            <MenuItem value="M Tech VLSI and Embedded Systems">M Tech VLSI and Embedded Systems</MenuItem>
                            <MenuItem value="M Tech Software Systems">M Tech Software Systems</MenuItem>
                            <MenuItem value="M Tech Wireless Communication and Signal Processing">
                                M Tech Wireless Communication and Signal Processing
                            </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="form-group">
                        <TextField
                            label="Expected Graduation Year"
                            variant="standard"
                            name="gradYear"
                            value={formData.gradYear}
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>
                </div>
                </fieldset>

                {/* Previous Education */}
                <fieldset>
                    <legend className="prev-edu">Previous Education</legend>
                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="10th Grade Percentage"
                            variant="standard"
                            name="tenthgrade"
                            value={formData.tenthGrade}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                        <div className="form-group">
                        <TextField
                            label="12th Grade Percentage"
                            variant="standard"
                            name="twelfththgrade"
                            value={formData.twelfthGrade}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="JEE Mains Percentile"
                            variant="standard"
                            name="jeemains"
                            value={formData.jeeMains}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                        <div className="form-group">
                        <TextField
                            label="JEE Advanced Rank"
                            variant="standard"
                            name="jeeadv"
                            value={formData.jee}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                    </div>
                </fieldset>

                {/* Additional Information */}
                <fieldset>
                    <legend className="additional">Additional Information</legend>
                    <div className="form-group">
                    <TextField
                            label="Disabilities"
                            variant="standard"
                            name="disabilities"
                            value={formData.disabilities}
                            onChange={handleChange}
                            fullWidth/>
                    </div>
                </fieldset>

                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Profile;
