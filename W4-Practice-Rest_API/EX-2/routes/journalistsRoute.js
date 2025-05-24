import express from 'express';
import { getAllJournalists, getJournalistById, createJournalist, updateJournalist, deleteJournalist, getArticlesByJournalist } from '../controllers/journalistController.js';
const router = express.Router();

router.get('/', getAllJournalists); // GET /journalists - Get all journalists
router.get('/:id', getJournalistById); // GET /journalists/:id - Get a single journalist by ID  
router.post('/', createJournalist); // POST /journalists - Create a new journalist
router.put('/:id', updateJournalist); // PUT /journalists/:id - Update an existing journalist
router.delete('/:id', deleteJournalist); // DELETE /journalists/:id - Delete a journalist
router.get('/:id/articles', getArticlesByJournalist); // GET /journalists/:id/articles - Get articles by a specific journalist
export default router;