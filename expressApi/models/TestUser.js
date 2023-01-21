const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
///set Schema variable just to shorten code

const TestUserSchema = new Schema({
    username:String, 
    password:String,
    email:String
});

module.exports = mongoose.model('TestUser', TestUserSchema);
