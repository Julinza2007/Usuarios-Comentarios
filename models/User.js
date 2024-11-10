import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

export default User;