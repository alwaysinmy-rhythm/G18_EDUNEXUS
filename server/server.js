const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes=require("./Routes/userRoutes");
const dotenv = require("dotenv");
const pool = require("./config/db");
const authUser = require("./controller/authUser");
dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api/user',userRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});