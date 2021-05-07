import { useEffect, useState } from 'react';
import {insert,update,read,remove} from '../services/APIService';


const Book = ({match,history}) =>{        
const [id] = useState(match.params.id);
const [book,setBook] = useState({
   _id:'0',
    name: '',
    grade: 0
});
const [validationName,setName] = useState(''); 
const [validationGrade,setGrade] = useState(''); 
useEffect(()=>{

    if(id!=='0'){
      read('books',id,data=>{
          if(data)
          setBook(data);
      })

    }
},[id]);

function changeHnadler(e){                           
 if(e.target.name==='grade' && e.target.value !=='')
 {
    setGrade('');

 }
 if(e.target.name==='name' && e.target.value !=='')
 {
    setName('');

 }
                                    


setBook({
    ...book,
    [e.target.name]:e.target.value
});}
const back = ()=>{

    history.push('/books');
  
  }

  const validateinput = () => { 
    let nameError = "";
    let gradeError="";
   let noName=false;
   let noGrade=false;
   

    if (!book.name) {               
      nameError = "name required";
      setName(nameError);    
      noName=true;                   
    }
    if (!book.grade) {                      
        gradeError = "grade required";
        setGrade(gradeError);                   
        noGrade=true;
      }
    if(noName===true || noGrade===true){
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
        insert('books',book,data =>{
            if(data) return history.push('/books');
            console.log("error");
        });
    }
    else{
        update('course',id,book,data =>{
            if(data)return history.push('/books');
            console.log("error");
        });
    }

    }
   
  
  }
  const del =()=>{
      remove('books',id,data=>{
      history.push('/books');

      });
  }

    return (
        <div className='container'> 
            <h2>Book</h2>
            <form className='form'  >
              <div style={{margin:'12px 0'}}>
                  <label className='p10' htmlFor='name'>Book name:</label>
                  <input type='text' name='name' value={book.name} onChange={changeHnadler} required/>
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
            {validationName}
          </div>
              <div style={{margin:'12px 0'}}>
                  <label className='p10' htmlFor='points'>Book grade:</label>
                  <input type='text' name='grade'  value={book.grade} onChange={changeHnadler} required />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>                     
            {validationGrade}
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



export default Book;