import express from 'express';
import logger from './middleware/logger.js';
import validateArticle from './middleware/validateArticle.js';
import validateCategory from './middleware/validateCategory.js';
import validateJournalist from './middleware/validateJournalist.js';
import articaleRouter from './routes/articlesRoute.js';
import journalistRoute from './routes/journalistsRoute.js';
import categoryRoute from './routes/categoryRoute.js';

const app = express();

const PORT = 3000;
app.use(express.json());
app.use(logger);
app.use('/articles',validateArticle, articaleRouter);
app.use('/journalists',validateJournalist, journalistRoute);
app.use('/categories',validateCategory, categoryRoute);


app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});