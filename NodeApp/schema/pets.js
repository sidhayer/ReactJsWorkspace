const mongo = require('mongoose');
const Schema=mongo.Schema;

const Pets = new Schema({
    name:String,
    species:String,
    breed:String
})

const PetsModel = mongo.model("pets",Pets);

module.exports={
    Pets,
    PetsModel
}