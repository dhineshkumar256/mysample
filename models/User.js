const mongoose = require('mongoose');
const { Schema } = mongoose; // this is the same thing as const Schema = mongoose.Schema

const userSchema = new Schema({     // creating new Schema object
    googleId : String               // it refers when say googleId is to be string
});

mongoose.model('users', userSchema);  // calling mongoose model function with users as model to store as collection in DB
