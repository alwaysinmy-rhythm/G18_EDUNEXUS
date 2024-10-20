const express = require('express');
const pool = require('./config/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const protect = require('./middleware/authMiddleware');
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/view-profile', protect, async (req, res) => {
    try {
        const studentSID = req.user.sid;  
        const personalQuery = SELECT * FROM Student_Personal WHERE SID = $1;
        const personalResult = await pool.query(personalQuery, [studentSID]);

        if (personalResult.rows.length === 0) {
            return res.status(404).json({ message: 'Student personal information is not found!' });
        }

        const studentPersonal = personalResult.rows[0];

        const academicQuery = SELECT * FROM Student_Academic WHERE SID = $1;
        const academicResult = await pool.query(academicQuery, [studentSID]);

        if (academicResult.rows.length === 0) {
            return res.status(404).json({ message: 'Student academic information is not found!' });
        }

        const studentAcademic = academicResult.rows[0];

        const profile = {
            personal_info: {
                SID: studentPersonal.sid,
                Sname: studentPersonal.sname,
                Fname: studentPersonal.fname,
                Mname: studentPersonal.mname,
                Bdate: studentPersonal.bdate,
                Addr_street: studentPersonal.addr_street,
                Addr_city: studentPersonal.addr_city,
                Addr_state: studentPersonal.addr_state,
                Emergency_no: studentPersonal.emergency_no,
                EmailId: studentPersonal.emailid,
                gender: studentPersonal.gender,
            },
            academic_info: {
                year: studentAcademic.year,
                program: studentAcademic.program,
                department: studentAcademic.department,
                branch: studentAcademic.branch,
                CPI: studentAcademic.cpi,
                admission_rank: studentAcademic.admission_rank,
                admission_through: studentAcademic.admission_through,
            }
        };

        return res.status(200).json(profile);
    } catch (error) {
        console.error('Error during fetching profile:', error);
        return res.status(500).json({ message: 'Internal server error occured!!' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Server running on port ${PORT});
});