import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/userController.js";
import validateUser from "../middleware/validateUser.js";
const router = express.Router();

router.get('/', getAllUsers); // GET /users - List all users
router.get('/:id', getUserById); // GET /users/:id - Get one user
router.post('/', validateUser, createUser); // POST /users - Create new user
router.put('/:id', updateUser); // PUT /users/:id - Update user
router.delete('/:id', deleteUser); // DELETE /users/:id - Delete user

export default router;