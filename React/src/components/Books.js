import { useEffect, useState } from 'react';
import {list} from '../services/APIService';
import {Link} from 'react-router-dom';

const Books = () =>{

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        list('books', data => {
           
            setBooks(data);
            
        })
    },);

    return(
        <div className='container'>
             <h1>Books</h1>
             <table>
                 <thead>
                 <tr>

                     <th>Books name</th>
                     <th>Grade</th>
                     <th>
                     <Link to={`books/0`}>Add new</Link>
                     </th>
                 </tr>

                 </thead>
                 <tbody>
                   
                     { books.map(c=> (
  <tr key={c._id}>
  <td>{c.name}</td>
  <td>{c.grade}</td>
  <td>
      <Link to={`books/${c._id}`}>Edit</Link>
  </td>
</tr>

                     ))  
                     
                     }
              

                 </tbody>
             </table>
             </div>
       
    )
}
export default Books;