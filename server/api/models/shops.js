const mongoose = require('mongoose');

const shopSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    // collection: 'Shops',
  }
);

module.exports = mongoose.model('shops', shopSchema, 'Shops');
