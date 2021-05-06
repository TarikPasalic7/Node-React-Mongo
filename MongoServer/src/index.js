
import mongoose from "mongoose";
import config from "./config";
import app from "./app";
//const router = require("./router")

//router(app);


mongoose.connect(config.mongo,
{
    useUnifiedTopology:true,
    useNewUrlParser:true
}
).then(()=> console.log(" db connected")).catch(()=> console.log("error connecting to db"));
app.listen(config.port,error =>{
 
    if(error)
    return console.log(error);
    console.log(`Server is listening on port ${config.port}`);


});