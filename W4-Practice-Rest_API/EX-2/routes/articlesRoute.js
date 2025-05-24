import express from 'express';
import {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
} from "../controllers/articlesController.js";

const router = express.Router();
router.get('/', getAllArticles); // GET /articles - List all articles
router.get('/:id', getArticleById); // GET /articles/:id - Get one article
router.post('/', createArticle); // POST /articles - Create new article
router.put('/:id', updateArticle); // PUT /articles/:id - Update article
router.delete('/:id', deleteArticle); // DELETE /articles/:id - Delete article
export default router;