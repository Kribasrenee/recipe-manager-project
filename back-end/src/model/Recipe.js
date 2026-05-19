const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength:2,
        required: true
    },
    duration:{
       value:{type: Number, default: 0},
       units:{type: String, enum:["hour","minutes"]},
    },
    image: String,
    ingredients: [String],
    category_id:mongoose.mongoose.Types.ObjectId,
    steps:[mongoose.mongoose.Types.ObjectId],
    timestamps:true
   
});


const Recipe=mongoose.model("recipe",recipeSchema);
module.exports=Recipe;