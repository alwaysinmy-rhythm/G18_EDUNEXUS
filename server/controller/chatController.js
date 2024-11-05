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

        const result = await pool.query(
            `INSERT INTO message (mtime, content, senderId, CID) VALUES (CURRENT_TIMESTAMP, $1, $2, $3) RETURNING MSG_ID`,
            [encryptedContent, senderId, courseId]
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
    const { courseId } = req.params;

    if (!courseId) {
        return res.status(400).json({ message: "Please provide a courseId." });
    }
    try {
        const result = await pool.query(
            `SELECT * FROM message WHERE CID = $1 ORDER BY mtime`,
            [courseId]
        );

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

module.exports = {
    sendMessage,
    getMessages
};
