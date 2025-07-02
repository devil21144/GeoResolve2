const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
  database: process.env.PDATABASE,
  user: process.env.PUSER,
  host: process.env.PHOST,
  password: process.env.PPASSWORD,
  port: process.env.PPORT,
});
const query = (text, params) => {
  return pool.query(text, params);
};
module.exports = { query };
