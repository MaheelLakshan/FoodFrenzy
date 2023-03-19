const express = require('express');
const { default: mongoose } = require('mongoose');
const Shop = require('../models/shops');
const router = express.Router();
const Food = require('../models/foods');

router.get('/getallshops', async (req, res) => {
  try {
    const Shops = await Shop.find({});
    res.send(Shops); // return res.json({Shops}); get array of Shops objects
  } catch (error) {
    return res.status(400).json({
      messege: error,
    });
  }
});



// router.get('/:restaurant', async (req, res) => {
//   const restaurant = req.params.restaurant;
//   try {
//     const foods = await Food.find({ restaurant });
//     res.json(foods);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//   }
// });

module.exports = router;
