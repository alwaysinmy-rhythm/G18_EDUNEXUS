const { config } = require("dotenv");
const { Pool } = require("pg");
require("dotenv").config();
config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,


    // connectionString: process.env.DATABASE_URL + "?sslmode=require",
    ssl: {
      rejectUnauthorized: false  // This allows the connection without certificate validation
    }
  });
pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => {
    console.error("Error connecting to PostgreSQL:", err.message);
    process.exit(1);
  });

  module.exports = pool;