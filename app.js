require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/recipes', recipeRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});