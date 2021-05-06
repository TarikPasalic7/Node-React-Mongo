import _ from "lodash";
import Books from "../models/books.model";

const list = (req,res) => {


    Books.find((err,data)=>{

        if(err)
        {
           console.log(err);
        }
        res.status(200).json(data);
    });

}
const create =(req,res)=>{
    const book= Books(req.body);
    book.save((err,data)=>{
    if(err){
        return res.status(400).json(err.message);
    }
    res.status(201).json(data);
    });
    
    }
    const read = (req,res) => {

        const id = req.params.id;
        Books.findById(id).exec((err,data)=>{
      
              if(err)
              {
                 console.log(err);
              }
              res.status(200).json(data);
          });
      
      }
      
const update = (req,res) =>{

    const id = req.params.id;
    Books.findById(id).exec((err,data)=>{

        if(err || !data)
        {
         return res.status(400).json("Book not found");
        }
        const book= _.extend(data,req.body);
          
       book.save((err,data)=>{
            if(err){
                return res.status(400).json(err.message);
            }
            res.status(200).json(data);
            });
    });
}

const remove = (req,res)=>{
    const id = req.params.id;
    Books.findById(id).exec((err,data)=>{

        if(err || !data)
        {
           console.log("Book not found");
        }
        data.remove((err,data)=>{
               if(err){
                   return res.status(400).json(err.message);
               }
                  res.status(200).json("Book deleted");
        });
    });

}
    

export default {create,list,read,update,remove};