import Comment from '../models/Comment.js';

const getAllComments = (req, res) =>{
    Comment.find()
        .then(comments => res.status(200).json(comments));
};

const getCommentById = (req, res) =>{
    Comment.findOne( { id: req.params.id })
        .then(comment => res.status(200).json(comment));
};

const createComment = (req, res) =>{
    const newComment = new Comment({ ...req.body });
    newComment.save()
        .then(comment => res.status(200).json(comment));
};

const deleteAllComments = (req, res) =>{
    Comment.deleteMany()
        .then(() => res.status(200).json({ msg: 'Comment deleted!'}));
};

const deleteCommentById = (req, res) =>{
    Comment.deleteOne({ id: req.params.id })
        .then(() => res.status(200).json({ msg: 'Comment deleted!' }));
};

const updateCommentById = (req, res) =>{
    Comment.findOneAndUpdate( { id: req.paramas.id }, req.body, { new: true })
        .then(comment => res.status(200).json(comment));
};

const commentController = {
    getAllComments,
    getCommentById,
    createComment,
    deleteAllComments,
    deleteCommentById,
    updateCommentById
};

export default commentController;

