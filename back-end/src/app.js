const express = require('express');
const cors= require('cors');
const morgan=require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(cors({origin:'*'}));
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(express.json());
app.use("/health", (req, res) => {
    res.send("Server is running healthy 💊")
});
module.exports = app;