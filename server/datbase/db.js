// const express = require('express');
// const db = express();
// const mongoose = require('mongoose');

// // const roomsRoute = require('./api/routes/roomsRoute');
// // db.use('/api/rooms', roomsRoute);
// // const password = 'qnszBA0zGa3HVbcm';
// // const encodedPassword = encodeURIComponent(password);

// mongoose.connect(
//   'mongodb+srv://maheellakshanra:qnszBA0zGa3HVbcm@cluster0.lykfcde.mongodb.net/FoodFrenzy-Restaurant',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// var dbconnection = mongoose.connection;

// dbconnection.on('connected', () => {
//   console.log('Mongo Db connected succusfully');
// });

// dbconnection.on('error', () => {
//   console.log('Mongo Db connected Failed');
// });

// db.use((req, res, next) => {
//   res.status(200).json({
//     message: 'It works in main',
//   });
// });

// module.exports = db;
