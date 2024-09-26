const pool = require("../config/db");
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  console.log("reach at protect");
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token,"hello");
      const temp = await pool.query(
        `select * from Login where SID = '${ID}'`
      );
      req.user = temp.rows[0];
      console.log("decoded");
      next(); 
    } catch (error) {
      console.log(error);
      res.status(401).json({ mesasge: "Not Authorized, token failed" });
      return;
    }
  }
  if (!token) {
    res.status(401).json({ mesasge: "No token" });
    return;
  }
};

module.exports = protect;
