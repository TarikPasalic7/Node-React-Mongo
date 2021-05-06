import _ from "lodash";
import Authors from "../models/authors.model";

const create =(req,res)=>{
const author = Authors(req.body);
author.save((err,data)=>{
if(err){
    return res.status(400).json(err.message);
}
res.status(201).json(data);
});

}


const list = (req,res) => {


    Authors.find((err,data)=>{

        if(err)
        {
           console.log(err);
        }
        res.status(200).json(data);
    });

}
const read = (req,res) => {

  const id = req.params.id;
    Authors.findById(id).exec((err,data)=>{

        if(err)
        {
           console.log(err);
        }
        res.status(200).json(data);
    });

}

const update = (req,res) =>{

    const id = req.params.id;
    Authors.findById(id).exec((err,data)=>{

        if(err || !data)
        {
         return res.status(400).json("Author not found");
        }
        const author= _.extend(data,req.body);
          
        author.save((err,data)=>{
            if(err){
                return res.status(400).json(err.message);
            }
            res.status(200).json(data);
            });
    });
}

const remove = (req,res)=>{
    const id = req.params.id;
    Authors.findById(id).exec((err,data)=>{

        if(err || !data)
        {
           console.log("Author not found");
        }
        data.remove((err,data)=>{
               if(err){
                   return res.status(400).json(err.message);
               }
                  res.status(200).json("Author deleted");
        });
    });

}

export default {create,list,read,update,remove};