import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    yearOfBirth:Number,
    adress:String

});

export default mongoose.model("Author",AuthorSchema);