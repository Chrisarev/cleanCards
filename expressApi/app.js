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
const Deck = require('./models/deck')
const MongoDBStore = require('connect-mongo'); //allows us to store session in mongo
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/cleancards';
const {isLoggedIn} = require('./middleware')

mongoose.connect(dbUrl, {
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
app.use(mongoSanitize()) ///prevents users from inputting characters that could result in mongo injection

const secret = process.env.SECRET || 'thisshouldbeabettersecret!'

const store = MongoDBStore.create({
    mongoUrl:dbUrl,
    secret, 
    touchAfter: 24 * 60 * 60 ///lazy update session unless 1 day has passed
});

store.on('error', function(e){
    console.log('SESSION STORE ERROR:', e)
})

const sessionConfig = {
    store,
    name:'__umli',
    secret, ///used to sign cookies
    resave:false,
    saveUninitialized: true,
    cookie:{
        httpOnly: true, ///safety feature to safeguard against cross website scripting
        ///expires a week from now (1000ms(1sec) * 60secs(1min)* 60mins(1hour)* 24hrs(1day)* 7days(1week))
        /*secure:true,*/
        expires: Date.now() + 1000 * 60 * 60 * 24 ,
        maxAge: 1000 * 60 * 60 * 24  ///maxAge of cookie is a day
    }
}

app.use(session(sessionConfig)) 
app.use(passport.initialize()) 
app.use(passport.session()) ///for persistent login sessions
passport.use(new LocalStrategy(User.authenticate()))
///telling passport to use UserSchema method authenticate which was added
///to user model with passport-local-mongoose
passport.serializeUser(User.serializeUser())
///tells passport how to store user in session
passport.deserializeUser(User.deserializeUser())
///tells passport how to remove user from session


/*app.use((req,res,next) =>{ ///allows flash messages to be accessible in all templates
    res.locals.currentUser = req.user; ///gives access to the current user in all templates
    next()
})*/

app.get('/login', isLoggedIn, (req,res) =>{
    res.sendStatus(204); 
})

app.get('/isAuth', isLoggedIn, (req,res) =>{
    res.sendStatus(204);
})
app.get('/getDecks', isLoggedIn, async (req,res) =>{
    const userId = req.user.id; 
    const userDecks = await Deck.find({'creator': userId}).populate()
    res.json(userDecks) 
})

app.post('/login', passport.authenticate('local',{keepSessionInfo:true}), (req,res) =>{
    if(!req.user) {
        res.sendStatus(401)
    }else{
        res.json({user:req.user})
    }
})

app.post('/logout', (req,res) =>{
    req.logout(function(err){
        if (err) {res.json({attempt:"failed"})}
        res.json({attempt:"success"})
    })
})

app.post('/postUser', async (req,res) =>{
    try{
        const {email, username, password} = req.body; 
        const user = new User({email, username}); 
        const registeredUser = await User.register(user,password); 
        req.login(registeredUser, err => {
            if(err) return next(err) ; 
            res.json({redirectURL:"/userDash",user:username})
        })
    } catch(e) {
        res.json({redirectURL:"/signup"})
    }
})
app.post('/addDeck', isLoggedIn, async(req,res) =>{
    try{
        const {deckTitle, deckDesc, deckStyle} = req.body; 
        const deck = new Deck({deckTitle, deckDesc, deckStyle})
        deck.cardCount=0; 
        deck.creator = req.user._id; 
        await deck.save();
        res.json(deck)
    }catch(e) {
        res.sendStatus(401)
    }
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