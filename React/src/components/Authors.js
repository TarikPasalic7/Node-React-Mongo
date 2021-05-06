import { useEffect, useState } from 'react';
import {list} from '../services/APIService';
import {Link} from 'react-router-dom';

const Authors = () =>{

    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
        list('authors', data => {
           
            setAuthors(data);
            
        })
    },);

    return(
        <div className='container'>
             <h1>Authors</h1>
             <table>
                 <thead>
                 <tr>

                     <th>First name</th>
                     <th>Last name</th>
                     <th>Age</th>
                     <th>Address</th>
                     <th>
                     <Link to={`authors/0`}>Add new</Link>
                     </th>
                 </tr>

                 </thead>
                 <tbody>
                   
                     { authors.map(c=> (
  <tr key={c._id}>
  <td>{c.firstName}</td>
  <td>{c.lastName}</td>
  <td>{c.yearOfBirth}</td>
  <td>{c.address}</td>
  <td>
      <Link to={`authors/${c._id}`}>Edit</Link>
  </td>
</tr>

                     ))  
                     
                     }
              

                 </tbody>
             </table>
             </div>
       
    )
}
export default Authors;