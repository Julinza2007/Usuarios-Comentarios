import express from 'express';
import controller from '../controllers/userControllers';

const router = express.Router();

router.route('/')
.get(controller.getAllUser)
.post(controller.createUser)
.delete(controller.deleteAllUsers);

router.route('/:name')
.get(controller.getUserByName);

router.route('/:id')
.get(controller.getUserById)
.delete(controller.deleteUserById);

export default userRouter;