const express = require('express')
const mongoose = require('mongoose')
const PORT = 3000 
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/clickin')
  .then(() => console.log('Connected to MongoDB'))
 .catch(err => console.error('MongoDB connection error:', err));

+app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})