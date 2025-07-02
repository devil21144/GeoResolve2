const express = require('express');
require('dotenv').config()
const morgan = require('morgan');
const cors = require('cors');
const app = express();
// accessing the port for the backend
const port = process.env.PORT || 5000;
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
})