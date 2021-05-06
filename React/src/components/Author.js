import { useEffect, useState } from 'react';
import {insert,update,read,remove} from '../services/APIService';


const Author = ({match,history}) =>{        
const [id] = useState(match.params.id);
const [author,setAuthor] = useState({
   _id:'0',
    firstName: '',
    lastName: '',
    yearOfBirth:0,
    address:''
});
const [validationfirstName,setfirstName] = useState(''); 
const [validationlastName,setlastName] = useState(''); 
useEffect(()=>{

    if(id!=='0'){
      read('authors',id,data=>{
          if(data)
          setAuthor(data);
      })

    }
},[id]);

function changeHnadler(e){                           
 if(e.target.name==='firstName' && e.target.value !=='')
 {
    setfirstName('');

 }
 if(e.target.name==='lastName' && e.target.value !=='')
 {
    setlastName('');

 }
                                    


setAuthor({
    ...author,
    [e.target.name]:e.target.value
});}
const back = ()=>{

    history.push('/authors');
  
  }

  const validateinput = () => { 
    let lNameError = "";
    let fNameError="";
   let noLName=false;
   let noFName=false;
   

    if (!author.firstName) {               
      fNameError = "Firstname required";
      setfirstName(fNameError);    
      noFName=true;                   
    }
    if (!author.lastName) {                      
        lNameError = "Lastname required";
        setlastName(lNameError);                   
        noLName=true;
      }
    if(noFName===true || noLName===true){
        return false;
    }
    else{
        return true;

    }
    
    
  };
  const Save = ()=>{
    const isValid = validateinput();     
    if(isValid)                            
    { 
        if(id ==='0'){
        insert('authors',author,data =>{
            if(data) return history.push('/authors');
            console.log("error");
        });
    }
    else{
        update('authors',id,author,data =>{
            if(data)return history.push('/authors');
            console.log("error");
        });
    }

    }
   
  
  }
  const del =()=>{
      remove('authors',id,data=>{
      history.push('/authors');

      });
  }

    return (
        <div className='container'> 
            <h2>Author</h2>
            <form className='form'  >
              <div style={{margin:'12px 0'}}>
                  <label htmlFor='firstName'>First name:</label>
                  <input type='text' name='firstName' value={author.firstName} onChange={changeHnadler} required/>
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
            {validationfirstName}
          </div>
              <div style={{margin:'12px 0'}}>
                  <label htmlFor='lastName'>Last name:</label>
                  <input type='text' name='lastName'  value={author.lastName} onChange={changeHnadler} required />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>                     
            {validationlastName}
          </div>
          <div style={{margin:'12px 0'}}>
                  <label htmlFor='yearOfBirth'>Age:</label>
                  <input type='number' name='yearOfBirth'  value={author.yearOfBirth}  onChange={changeHnadler} />
              </div>
              <div style={{margin:'12px 0'}}>
                  <label htmlFor='address'>Address:</label>
                  <input type='text' name='address'  value={author.address}  onChange={changeHnadler}  />
              </div>
              <hr/>
            {
                id !=='0' && ( <div className='left'>
              <button type='button' onClick={del}>DELETE</button>
            </div>)
            }
           
            <div className='right'>
              <button type='button' onClick={back}>BACK</button>
              &nbsp; &nbsp;
              <button type='button' onClick={Save}>SAVE</button>
            </div>
           </form>
        </div>
    )
}



export default Author;