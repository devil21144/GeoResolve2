const supabase = require("../supabaseClient");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      const error = new Error("Enter all the fields");
      error.statusCode = 400;
      throw error;
    } else if (username.length > 25) {
      const error = new Error(
        "The length of the username can only be a maximum of 25 characters"
      );
      error.statusCode = 413;
      throw error;
    } else if (password.length > 50) {
      const error = new Error(
        "Maximum length for password is only 50 characters"
      );
      error.statusCode = 413;
      throw error;
    }
    const response = await supabase.from("users").delete().eq("username","mihir");
    res.status(200).send({ data: response, status: "ok" });
  } catch (err) {
      let message;
      message = err.message || "Internal Server Error";
    const status = err.statusCode || 500;
    res.status(status).send({
      status: "error",
      message: message,
    });
  }
});
app.listen(port, () => {
  console.log(`The server is up and running ${port}`);
});
