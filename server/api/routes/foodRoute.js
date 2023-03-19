const express = require('express');
// const { default: mongoose } = require('mongoose');
const Food = require('../models/foods');
const router = express.Router();

router.get('/getallfoods', async (req, res) => {
  try {
    const Foods = await Food.find({});
    res.send(Foods); // return res.json({Foods}); get array of Foods objects
  } catch (error) {
    return res.status(400).json({
      messege: error,
    });
  }
});

router.post('/addfood', async (req, res) => {
  try {
    const newFood = new Food(req.body);
    // console.log('req.body:', req.body);
    // console.log('newFood:', newFood);

    const savedFood = await newFood.save(); // save the new food and assign it to a variable

    res.status(201).json(savedFood);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.messege });
  }
});

// router.delete('/delete/:id', async (req, res) => {
//   const userId = req.params.id;
//   try {
//     const updatedFood = await Food.findById(userId);
//     if (!updatedFood) {
//       return res.status(404).json({ error: 'Food item not found' });
//     }
//     res.status(200).json({ message: 'Food item deleted successfully' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

router.delete('/:name', async (req, res) => {
  try {
    const food = await Food.findOneAndDelete({ name: req.params.name });
    if (!food) {
      return res.status(404).send();
    }
    res.status(200).send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

// router.delete('/:id', getFood, async (req, res) => {
//   const foodId = '6416b04ac68b9c5b226e89c0';
//   try {
//     await res.Food.deleteOne({ _id: foodId }, function (err) {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log('Movie deleted successfully!');
//       }
//     });
//     // res.json({ message: 'Deleted Movie' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// //Function

// async function getFood(req, res, next) {
//   let movie;
//   try {
//     movie = await Food.findById(req.params.id);
//     if (movie == null) {
//       return res.status(404).json({ message: 'Cannot find movie' });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.movie = movie;
//   console.log(movie);
//   next();
// }

// router.route('/:id').delete((req, res) => {
//   Food.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Exercise deleted.'))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

module.exports = router;
