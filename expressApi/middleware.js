const {userSchema} = require('./models/user');

module.exports.isLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()){
        return res.sendStatus(401)
    }
    next(); 
}
