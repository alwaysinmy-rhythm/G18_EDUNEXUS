const bcrypt = require("bcryptjs");
const pool = require("../config/db");
const generateToken = require("../config/generateToken");

const authUser = async (req, res) => {
  const { studentID, password } = req.body;

  const userExists = await pool.query(
    `select * from students where SID='${studentID}'`);

  if (userExists.rows.length) {
    bcrypt.compare(password, userExists.rows[0].password, function (err, response) {
      if (response) {
        console.log(userExists.rows)
        res
          .status(201)
          .json({
            _id: userExists.rows[0].id,
            SID: userExists.rows[0].SID,
            token: generateToken(userExists.rows[0].id),
          });
      } else {
        console.log(err);
        res.status(401).json({ success: false, message: "Invalid Password" });
      }
    });
  } else
    res
      .status(400)
      .json({ success: false, message: "Login failed User not found" });
};

module.exports = authUser;
