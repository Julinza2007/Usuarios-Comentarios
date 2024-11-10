import express from 'express';
import controller from '../controllers/commentControllers.js'

const router = express.Router();

router.route('/')
.get(controller.getAllComments)
.post(controller.createComment)
.delete(controller.deleteAllComments);

router.route('/:id')
.get(controller.getCommentById)
.delete(controller.deleteCommentById)
.put(controller.updateCommentById);

export default commentRouter;   