require('dotenv').config();

const productData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product')

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products)
    } catch (error) {
        
    }
}