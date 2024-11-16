const pool = require("../config/db");

// Takes CID and note_id in req body in json format.

const courseNotes = async (req, res) => {
    const { CID, note_id} = req.body;

    // check that CID and note_id are in the body or not?
    if (!CID || !note_id) {
        return res.status(400).json({ error: 'Proper information is not provided!' });
    }

    try {
        // Query to fetch the note_link
        const { rows } = await pool.query('SELECT note_link FROM Notes WHERE CID = $1 AND note_id = $2', [CID, note_id]);

        // If there are no entries then: 
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Note is not found for this particular course' });
        }

        res.json({ note_link: rows[0].note_link });
    } catch (error) {
        console.error('Error during querying the database:', error);
        res.status(500).json({ error: 'Error in the server side!' });
    }
};

module.exports = {courseNotes}
