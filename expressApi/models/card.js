const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const ImageSchema = new Schema({
    url:String
})

ImageSchema.virtual('thumbnail').get(function(){
    return this.url.replace('/upload', '/upload/w_200'); 
}) ///acts as if image URL's are stored in format needed to apply cloudinary thumbnail
   ///transformation 
   
const CardSchema = new Schema({
    frontSide:{
        image:String, 
        body:String
    },
    backSide:{
        image:String,
        body:String
    },
    containingDeck:{ ///reference to a User Object
        type:Schema.Types.ObjectId, 
        ref:'Deck'
    }
})

module.exports = mongoose.model('Card', CardSchema);