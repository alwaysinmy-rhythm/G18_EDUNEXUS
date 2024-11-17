import React, { useState } from 'react';
// import '../CSS/Profile.css';
import logo from '../Images/profile_logo.png';
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
                        <TextField
                            label="sid"
                            variant="standard"
                            name="sid"
                            value={formData.sid}
                            onChange={handleChange}
                            fullWidth
                            // InputLabelProps={{
                            //     style: {
                            //         color: 'white', // Set label color to white
                            //     },
                            // }}
                        />
                    </div>

                    <div className="form-row">
                        <TextField
                            label="sname"
                            variant="standard"
                            name="sname"
                            value={formData.sname}
                            onChange={handleChange}
                            fullWidth/>
                    </div>

                    <div className="form-row">
                        <TextField
                            label="fName"
                            variant="standard"
                            name="fName"
                            value={formData.fName}
                            onChange={handleChange}
                            fullWidth/>
                    </div>

                    <div className="form-row">
                        <TextField
                            label="mName"
                            variant="standard"
                            name="mName"
                            value={formData.mName}
                            onChange={handleChange}
                            fullWidth/>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="bdate"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard" 
                            name="bdate"
                            value={formData.bdate}
                            fullWidth
                            disabled
                        />

                        </div>
                        <div className="form-group">
                        <TextField
                            label="nationality"
                            variant="standard"
                            name="nationality"
                            value={formData.nationality}
                            fullWidth
                            disabled
                            />
                        </div>
                    </div>

                    <div className="form-group">
                    <label>gender</label>
                    <div className="radio-button-group">
                        <label>
                            <input 
                                type="radio" 
                                name="gender" 
                                value="female" 
                                onChange={handleChange} 
                                checked={formData.gender === 'female'} 
                                disabled // Make this radio button read-only
                            /> 
                            female
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="gender" 
                                value="male" 
                                onChange={handleChange} 
                                checked={formData.gender === 'male'} 
                                disabled // Make this radio button read-only
                            /> 
                            male
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="gender" 
                                value="other" 
                                onChange={handleChange} 
                                checked={formData.gender === 'other'} 
                                disabled // Make this radio button read-only
                            /> 
                            other
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="gender" 
                                value="prefer-not" 
                                onChange={handleChange} 
                                checked={formData.gender === 'prefer-not'} 
                                disabled // Make this radio button read-only
                            /> 
                            prefer_not_to_say
                        </label>
                    </div>
                </div>

                </fieldset>

                {/* Contact Information */}
                <fieldset>
                    <legend className="contact">Contact Information</legend>
                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="personalEmail"
                            variant="standard"
                            name="personalemail"
                            value={formData.personalEmail}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                        <div className="form-group">
                        <TextField
                            label="instituteEmail"
                            variant="standard"
                            name="instituteemail"
                            value={formData.instituteEmail}
                            fullWidth
                            disabled
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="emergency_no"
                            variant="standard"
                            name="emergencyno"
                            value={formData.emergencyNo}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                    </div>

                    <div className="form-row">
                    <div className="form-group">
                        <TextField
                            label="addr_street"
                            variant="standard"
                            name="addrstreet"
                            value={formData.addrStreet}
                            onChange={handleChange}
                            fullWidth/>
                    </div>
                    <div className="form-group">
                    <TextField
                        label="addr_city"
                        variant="standard"
                        name="addrcity"
                        value={formData.addrCity}
                        onChange={handleChange}
                        fullWidth/>
                    </div>
                        
                    </div>

                    <div className="form-row">
                    <div className="form-group">
                        <TextField
                            label="addr_state"
                            variant="standard"
                            name="addrstate"
                            value={formData.addrState}
                            onChange={handleChange}
                            fullWidth/>
                        </div>
                    <div className="form-group">
                    <TextField
                        label="zipcode"
                        variant="standard"
                        name="zipcode"
                        value={formData.zipcode}
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
                                labelId="program"
                                id="program"
                                name="program"
                                value={formData.program}
                                disabled
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
                            label="year"
                            variant="standard"
                            name="year"
                            value={formData.year}
                            disabled
                            fullWidth
                        />
                    </div>
                </div>
                </fieldset>

                {/* Admission Details */}
                <fieldset>
                    <legend className="adm-info">Admission Information</legend>
                    <div className="form-row">
                        <div className="form-group">
                        <TextField
                            label="admission_through"
                            variant="standard"
                            name="admissionthrough"
                            value={formData.admissionThrough}
                            fullWidth
                            disabled //non editable
                            />
                        </div>
                        <div className="form-group">
                        <TextField
                            label="admission_rank"
                            variant="standard"
                            name="admissionrank"
                            value={formData.admissionRank}
                            onChange={handleChange}
                            fullWidth
                            disabled //non editable
                            />
                        </div>
                    </div>
                </fieldset>

                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Profile;
