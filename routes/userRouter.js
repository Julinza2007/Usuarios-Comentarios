import express from 'express';
import userController from '../controllers/userControllers.js';

const router = express.Router();

router.route('/')
.get(userController.getAllUser)
.post(userController.createUser)
.delete(userController.deleteAllUsers);

router.route('/:name')
.get(userController.getUserByName);

router.route('/:id')
.get(userController.getUserById)
.delete(userController.deleteUserById);

export default userRouter;