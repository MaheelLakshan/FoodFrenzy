const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    restaurant: { type: String },
    image: {
      type: String,
    },
  }
  // {
  //   timestamps: true,
  //   // collection: 'Shops',
  // }
);

module.exports = mongoose.model('foods', foodSchema, 'Foods');
