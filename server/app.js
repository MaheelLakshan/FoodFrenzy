// import App from './server.js';
// import mongodb from 'mongodb';
// import dotenv from 'dotenv';
// dotenv.config();
// const MongoClient = mongodb.MongoClient;

// const port = process.env.PORT || 5000;

// MongoClient.connect

// import app from './server.js';
// import mongodb from 'mongodb';
// import dotenv from 'dotenv';
// import RestaurantsDAO from './dao/restaurantsDAO.js';
// import ReviewsDAO from './dao/reviewsDAO.js';
// dotenv.config();
// const MongoClient = mongodb.MongoClient;

// const port = process.env.PORT || 8000;

// MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
//   maxPoolSize: 50,
//   wtimeoutMS: 2500,
//   useNewUrlParser: true,
// })
//   .catch((err) => {
//     console.error(err.stack);
//     process.exit(1);
//   })
//   .then(async (client) => {
//     await RestaurantsDAO.injectDB(client);
//     await ReviewsDAO.injectDB(client);
//     app.listen(port, () => {
//       console.log(`listening on port ${port}`);
//     });
//   });

// import app from './server.js';
// import mongodb from 'mongodb';
// import dotenv from 'dotenv';
// import RestaurantsDAO from './dao/restaurantsDAO.js';
// import ReviewsDAO from './dao/reviewsDAO.js';
// dotenv.config();
// const MongoClient = mongodb.MongoClient;

// const port = process.env.PORT || 8000;

// MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
//     maxPoolSize: 50,
//     wtimeoutMS: 2500,
//     useNewUrlParser: true,
// })
//   .catch((err) => {
//     console.error(err.stack);
//     process.exit(1);
//   })
//   .then(async (client) => {
//     await RestaurantsDAO.injectDB(client);
//     await ReviewsDAO.injectDB(client);
//     app.listen(port, () => {
//       console.log(`listening on port ${port}`);
//     });
//   });

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Food = require('./api/models/foods');

app.use(cors());
app.use(bodyParser.json());

const shopRoute = require('./api/routes/shopRoute');
app.use('/shops', shopRoute);

const foodRoute = require('./api/routes/foodRoute');
app.use('/foods', foodRoute);

// app.delete('/foodss/delete/:id', (req, res) => {
//   const userid = req.params.id;
//   console.log(userid);
//   res.send('Got a DELETE request at /user');
// });

// app.delete('/foodds/delete/:id', async (req, res) => {
//   const userid = req.params.id; // extract the ID from the URL parameter
//   try {
//     console.log(userid);
//     const product = await Food.findByIdAndDelete(userid); // find and delete the food item with the given ID
//     if (!deletedFood) {
//       // if the food item wasn't found, return a 404 error
//       return res.status(404).json({ error: 'Food item not found' });
//     }
//     res.status(200).json({ message: 'Food item deleted successfully' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

app.get('/', (req, res, next) => {
  res.status(200).json({
    messege: 'Get request /',
  });
});

// app.post('/', (req, res) => {
//   let newfoodschema = new Food({
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     image: req.body.image,
//   });
//   newfoodschema.Save();
//   res.redirect('/');
// });

// const postFood = require('../src/components/Component_DashBoard/Seller_foods/Seller_foods');
// app.use('/seller/food', postFood);

mongoose
  .connect(
    'mongodb+srv://maheellakshanra:qnszBA0zGa3HVbcm@cluster0.lykfcde.mongodb.net/FoodFrenzy-Restaurant',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Successfully connected to the database'))
  .catch((error) => console.log(error));

app.use((req, res, next) => {
  // middle ware
  res.status(200).json({
    message: 'It works in main',
  });
});

module.exports = app;
