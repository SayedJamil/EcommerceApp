require('dotenv').config();

const productData = require('./data/products');
const connectDB = require('./config/db');
const Product=require('./models/Product')