const pool = require("../config/db");
const generateToken = require("../config/generateToken");

const authUser = async (req, res) => {
  console.log("Login attempt received");
  const { SID, password } = req.body;

  const userExists = await pool.query(
    `select * from Login where SID='${SID}'`
  );
  console.log(userExists.rows[0]);

  if (userExists.rows.length) {
    const user = userExists.rows[0];
    const isValidPassword = await pool.query(
      `SELECT password = crypt('${password}', password) as valid FROM Login WHERE SID='${SID}'`
    );

    if (isValidPassword.rows[0].valid) {
      console.log("Password matched");
      res.status(201).json({
        _id: user.id,
        SID: user.SID,
        token: generateToken(user.id),
      });
    } else {
      console.log("Password does not match");
      res.status(401).json({ success: false, message: "Invalid Password" });
    }
  } else {
    res.status(400).json({ success: false, message: "Login failed, user not found" });
  }
};

module.exports = authUser;
