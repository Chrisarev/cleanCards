const express = require('express'); 
const path = require('path'); 
const mongoose = require('mongoose'); 
const methodOverride = require('method-override');///allows http verbs other than POST/GET in forms 
const catchAsync = require('./utils/catchAsync')
const ExpressError = require('./utils/ExpressError')
const mongoSanitize = require('express-mongo-sanitize'); ///for preventing mongo injection
const testAPIRouter = require('./routes/testAPI')
const session = require('express-session'); 
const passport = require('passport'); 
const LocalStrategy = require('passport-local'); 
const User = require('./models/user')
const TestUser = require('./models/TestUser')
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/cleancards';

mongoose.connect('mongodb://localhost:27017/cleancards', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
});///creates db yelp-camp(or connects to it if already made)

const db = mongoose.connection; 
db.on("error", console.error.bind(console, "connection error:")); 
db.once("open", () => {
    console.log("Database Connected")
});///checks to see if connected and handles db connection error

const app = express(); ///starts express app 
app.use(express.json()); 
app.use(express.urlencoded({extended:true})) ///allows us to get req.params 
app.use(methodOverride('_method')) ///allows requests other than get/post thru forms 

app.get('/api', (req,res) =>{
    res.json({"users":['userOne', 'userTwo','userThree']})
})

app.get('/login', (req,res) =>{
    console.log('LOGIN REACHED')
    res.sendStatus(204); 

})

app.post('/postUser', async (req,res) =>{
    const testUser = new TestUser(req.body)
    console.log(req.body)
    await testUser.save(); 
    console.log('User created');
    res.sendStatus(204); 
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{ 
    console.log(`Serving on port ${PORT}`)
})

/*
app.set('views', path.join(__dirname, 'views')) ///so we can run app.js from outside of yelpcamp folder 
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.urlencoded({extended:true})) ///allows us to get req.params 
app.use(methodOverride('_method')) ///allows requests other than get/post thru forms 
app.use(mongoSanitize()) ///prevents users from inputting characters that could result in mongo injection

const secret = process.env.SECRET || 'thisshouldbeabettersecret!';

app.use('/testAPI', testAPIRouter) 
/*
app.all('*', (req,res,next) => { ///runs for all unrecognized urls 
    next(new ExpressError('Page Not Found', 404))
    ///passes ExpressError into err param for app.use

})

app.use((err,req,res,next) => { 
    const {status = 500} = err; ///gets status and message from ExpressError passed as err, else set defaults
    if(!err.message) err.message = 'Something went wrong!' ///if no error message, set default 
    res.status(status).render('error',{err})
    ///sets response status property to status passed in and renders error template 
})
*/
///listen on heroku specified port or 3000 in dev environment 
/*const PORT = process.env.PORT || 9000;
app.listen(PORT, () =>{ 
    console.log(`Serving on port ${PORT}`)
})*/