import express from 'express';
import commentController from '../controllers/commentControllers.js'

const router = express.Router();

router.route('/')
.get(commentController.getAllComments)
.post(commentController.createComment)
.delete(commentController.deleteAllComments);

router.route('/:id')
.get(commentController.getCommentById)
.delete(commentController.deleteCommentById)
.put(commentController.updateCommentById);

export default commentRouter;   