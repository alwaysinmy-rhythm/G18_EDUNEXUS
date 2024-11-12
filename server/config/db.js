const { config } = require("dotenv");
const { Pool } = require("pg");
require("dotenv").config();
config();

const pool = new Pool({
  user: "postgres",
  password: "12345678",
  database: "postgres",
  host: "localhost",
  port: 5432

//   connectionString: process.env.DATABASE_URL,
//   ssl: true, 
});

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => {
    console.error("Error connecting to PostgreSQL:", err.message);
    process.exit(1);
  });

  module.exports = pool;