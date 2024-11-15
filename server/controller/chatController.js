const pool = require('../config/db');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const sendMessage = async (req, res) => {
    const { content, senderId, courseId } = req.body;
    // console.log(req.body);

    if (!content || !senderId || !courseId) {
        return res.status(400).json({ message: "Please provide content, senderId, and courseId." });
    }

    try {
        const encryptedContent = cryptr.encrypt(content);


        const cid = await pool.query(
            `select cid from course where course_code = $1`,[courseId]
        )
        const result = await pool.query(
            `INSERT INTO message (mtime, content, senderId, CID) VALUES (CURRENT_TIMESTAMP, $1, $2, $3) RETURNING MSG_ID`,
            [encryptedContent, senderId, cid.rows[0].cid]
        );
        const messageId = result.rows[0].msg_id;

        req.io.to(courseId).emit("messageReceived", {
            MSG_ID: messageId,
            content, 
            senderId,
            courseId,
            mtime: new Date() 
        });

        return res.status(201).json({ messageId });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error sending message" });
    }
};

const getMessages = async (req, res) => {
    const { courseId } = req.body;
    console.log(req.body);
    if (!courseId) {
        return res.status(400).json({ message: "Please provide a courseId." });
    }
    try {

        const cid = await pool.query(
            `select cid from course where course_code = $1`,[courseId]
        )
        // console.log(cid.rows)
        const result = await pool.query(
            `SELECT * FROM message WHERE CID = $1 ORDER BY mtime`,
            [cid.rows[0].cid]
        );

        console.log(result.rows)

       //console.log(result.rows);
        const decryptedMessages = result.rows.map((message) => ({
            ...message,
            content: cryptr.decrypt(message.content),
        }));
        //console.log(decryptedMessages);

        return res.status(200).json(decryptedMessages);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error fetching messages" });
    }
};


const getCurrentSemester = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
  
    let semester = 'Autumn';
    let year = currentYear;
  
    if (currentMonth >= 1 && currentMonth <= 7) {
      semester = 'Winter';
    }
    if (semester === 'Autumn' && currentMonth >= 8) {
      year = currentYear;
    }
  
    return { semester, year };
  };

const courseList = async (req, res) => {
    const sid  = req.body.SID;

    try {
        const result = await pool.query(
            `SELECT c.Course_code, c.year, c.semester, c.credit, p.prof_name 
            FROM Course_enrolled_list cel
            JOIN Course c ON cel.CID = c.CID
            JOIN Professors p ON c.prof_id = p.prof_id
            WHERE cel.SID = $1`, [sid]
        );
        // console.log(result.rows[0]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No courses found for the given SID.' });
        }

        // Return the list of courses for the student
        return res.json(result.rows);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Database error occurred' });
    }
  };

module.exports = {
    sendMessage,
    getMessages,
    courseList
};
