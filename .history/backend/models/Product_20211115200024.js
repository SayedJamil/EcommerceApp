const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    desciption: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})