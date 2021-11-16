require('dotenv').config();
const express = require('express');
const { connect } = require('mongoose');
const connectDB = require('./config/db');

connec
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))