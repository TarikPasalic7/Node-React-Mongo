import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    yearOfBirth:Number,
    address:String

});

export default mongoose.model("Author",AuthorSchema);