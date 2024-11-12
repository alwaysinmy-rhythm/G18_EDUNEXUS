const express= require("express");
const router = express.Router();
const { spawn } = require('child_process');

// Improved Python process runner with debugging
const courseAllotmentController = async (req, res) => {
    const preferenceData = req.body;
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