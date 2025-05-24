import express from 'express';
import {
    getAllCategories, 
    getCategoryById, 
    createCategory, 
    updateCategory, 
    deleteCategory, 
    getArticlesByCategory

} from '../controllers/categoryController.js';

const router = express.Router();
router.get('/', getAllCategories); // GET /categories - List all categories 
router.get('/:id', getCategoryById); // GET /categories/:id - Get one category
router.post('/', createCategory); // POST /categories - Create new category
router.put('/:id', updateCategory); // PUT /categories/:id - Update category
router.delete('/:id', deleteCategory); // DELETE /categories/:id - Delete category
router.get('/:id/articles', getArticlesByCategory); // GET /categories/:id/articles - Articles from a category
export default router;