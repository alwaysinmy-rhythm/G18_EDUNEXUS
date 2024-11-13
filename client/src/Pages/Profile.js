import React, { useState } from 'react';
import '../CSS/Profile.css';

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
        photo: null
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
                <img src="/logo.png" alt="University Logo" />
            </div>
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Student Profile</h2>

                {/* Personal Information */}
                <fieldset>
                    <legend>Personal Information</legend>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="student-id">Student ID Number</label>
                            <input type="text" id="student-id" name="studentId" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="firstName" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="lastName" required onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="father-name">Father's Name</label>
                            <input type="text" id="father-name" name="fatherName" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mother-name">Mother's Name</label>
                            <input type="text" id="mother-name" name="motherName" required onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" id="dob" name="dob" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nationality">Nationality</label>
                            <input type="text" id="nationality" name="nationality" required onChange={handleChange} />
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
                    <legend>Contact Information</legend>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="institute-email">Institute's Email Address</label>
                            <input type="email" id="institute-email" name="instituteEmail" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="personal-email">Personal Email Address</label>
                            <input type="email" id="personal-email" name="personalEmail" required onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Street Address</label>
                            <input type="text" id="address" name="address" required onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State/Province/Region</label>
                            <input type="text" id="state" name="state" required onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="zip">Postal/Zip Code</label>
                            <input type="text" id="zip" name="zip" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input type="text" id="country" name="country" required onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>

                {/* Enrollment Details */}
                <fieldset>
                    <legend>Enrollment Details</legend>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="program">Program of Study</label>
                            <select id="program" name="program" onChange={handleChange}>
                                <option value="engineering">Engineering</option>
                                {/* Add more options here */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="grad-year">Expected Graduation Year</label>
                            <input type="text" id="grad-year" name="gradYear" onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>

                {/* Previous Education */}
                <fieldset>
                    <legend>Previous Education</legend>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="10th-grade">10th Grade's percentage</label>
                            <input type="text" id="10th-grade" name="tenthGrade" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="12th-grade">12th Grade's percentage</label>
                            <input type="text" id="12th-grade" name="twelfthGrade" required onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="jee-mains">JEE Mains Marks</label>
                            <input type="text" id="jee-mains" name="jeeMains" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="jee-adv">JEE Advanced Marks</label>
                            <input type="text" id="jee-adv" name="jeeAdv" onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>

                {/* Additional Information */}
                <fieldset>
                    <legend>Additional Information</legend>
                    <div className="form-group">
                        <label htmlFor="disabilities">Disabilities or Special Needs</label>
                        <textarea id="disabilities" name="disabilities" onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="photo-upload">Passport-sized Photo Upload</label>
                        <input type="file" id="photo-upload" name="photo" accept="image/*" onChange={handleChange} />
                    </div>
                </fieldset>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Profile;
