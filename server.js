const express = require('express');
require('dotenv').config()
const connectDB = require('./config/db');
const errorMiddleware = require('./middleware/errorMiddleware'); // Correctly import the middleware
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');


connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.use(errorMiddleware); // Use the middleware here

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
