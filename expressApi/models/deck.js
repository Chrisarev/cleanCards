const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const DeckSchema = new Schema({
    deckTitle:String, 
    deckDesc:String, 
    cardCount:Number,
    deckStyle:String,
    creator:{ ///reference to a User Object
        type:Schema.Types.ObjectId, 
        ref:'User'
    },
    cards:[ ///array of references to card objects
        {
            type:Schema.Types.ObjectId, 
            ref:'Card'
        }
    ]
})

module.exports = mongoose.model('Deck', DeckSchema);