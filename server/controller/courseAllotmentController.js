const express= require("express");
const pool = require("../config/db");
const router = express.Router();
const { spawn } = require('child_process');

// Improved Python process runner with debugging
const courseAllotmentController = async (req, res) => {

    const student_pref = await pool.query(
        'select * from edunexus.studentPreference'
    );

    let preferenceList = {};
   
    console.log(student_pref.rows.length);
    for( let i =0 ; i< student_pref.rows.length ; i++){
        console.log(student_pref.rows[i]); 
        preferenceList[student_pref.rows[i].sid] = [
            student_pref.rows[i].preference1,
            student_pref.rows[i].preference2,
            student_pref.rows[i].preference3,
            student_pref.rows[i].preference4,
            student_pref.rows[i].preference5
        ];
    }
    console.log(preferenceList);
    const preferenceData = {student_preferences:preferenceList , courseLimit : req.body.courseLimit , numberOfAllocations : req.body.numberOfAllocations};
    console.log(preferenceData);
    if (!preferenceData.student_preferences) {
        return res.status(400).json({ message: "preference list is not provided" });
    }

    try {
        const result = await runILPmodel(preferenceData);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const runILPmodel = (preferenceData) => {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['./Controller/ILP.py'], {
            stdio: ['pipe', 'pipe', 'pipe']
        });

        let stdoutData = '';
        let stderrData = '';

        pythonProcess.stdin.write(JSON.stringify(preferenceData));
        pythonProcess.stdin.end();

        pythonProcess.stdout.on('data', (data) => { stdoutData += data.toString(); });
        pythonProcess.stderr.on('data', (data) => { stderrData += data.toString(); });

        pythonProcess.on('close', (code) => {
            if (code !== 0) {
                return reject(new Error(`Python script error (${code}): ${stderrData}`));
            }
            try {
                resolve(JSON.parse(stdoutData));
            } catch (error) {
                reject(new Error(`Failed to parse Python output: ${error.message}\n Output was: ${stdoutData}`));
            }
        });

        pythonProcess.on('error', (error) => reject(error));
    });
};


module.exports = courseAllotmentController