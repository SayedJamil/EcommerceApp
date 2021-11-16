require('dotenv').config();


const mongoose = require('mongoose');
const connectionUrl ='mongodb+srv://user1:user1@ecommerceapp.pacjd.mongodb.net/shop?retryWrites=true&w=majority '
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.connectionUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection Success");
    } catch (error) {
        console.error("MongoDB connection failed");
        process.exit(1);
    }
}

module.exports = connectDB;