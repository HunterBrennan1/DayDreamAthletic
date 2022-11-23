const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String,
      },
    department: {
        type: String
    },
    category: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    quantity: {
        type: Number
    }
})

const Product = model('Product', productSchema);

module.exports = Product;
