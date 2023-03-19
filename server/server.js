// const express = require('express');
// const cors = require('cors');

// const app = express();

// const db = require('./datbase/db.js');

// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Server working!!');
// });

// const Port = process.env.Port || 5000;

// app.listen(Port, () => console.log(`Server Running on port ${Port}`));

// import express from 'express';
// import cors from 'cors';
// import restaurants from './api/restaurants.route.js';

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use('/api/v1/restaurants', restaurants);
// app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

// export default app;

const http = require('http');
const app = require('./app.js'); //include app

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
