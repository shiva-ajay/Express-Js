import express from 'express';
import path from 'path';
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
const port = process.env.PORT || 8000;

const app = express();

//Body Parser middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Logger middleware
app.use(logger);


// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/posts', posts);

// Error Handler
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
