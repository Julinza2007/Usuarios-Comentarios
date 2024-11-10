import User from '../models/User.js';
const getAllUsers = (req, res) =>{
    User.find()
        .then(users => res.status(200).json(users));    
};

const getUserById = (req, res) =>{
    User.findOne({ id: req.params.id })
        .then(user => res.status(200).json(user));
};

const getUserByName = (req, res) =>{
    User.find( {name: {"$regex": req.params.name, "$options": "i"}})
        .then(users => res.status(200).json(users));
};

const createUser = (req, res) =>{
    const newUser = new User({...req.body});
        newUser.save()
            .then(user => res.status(201).json(user));
};

const deleteAllUsers = (req, res) =>{
    User.deleteMany()
        .then(() => res.status(200).json({ msg: 'All characters deleted!'}));
};
const deleteUserById = (req, res) =>{
    User.deleteOne( { id: req.params.id })
        .then(() => res.status(200).json({ msg: 'Character deleted!' }));
};

const updateUserById = (req, res) =>{
    User.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
        .then(user => res.status(200).json(user));
};

const controller = {
    getAllUsers, 
    getUserById,
    getUserByName,
    createUser,
    deleteAllUsers,
    deleteUserById,
    updateUserById
};

export default userControllers;


