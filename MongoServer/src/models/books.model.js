import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
    name: String,
   
    grade:Number
   

});

export default mongoose.model("Books",BooksSchema);