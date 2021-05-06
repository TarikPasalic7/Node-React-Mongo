import {Link} from 'react-router-dom';

const navigator = () =>{

    return(

        <div className='navigator'> 
       <Link to='/'>Home</Link>
       &nbsp;|&nbsp;
       <Link to='/books'>Books</Link>
       &nbsp;|&nbsp;
       <Link to='/authors'>Authors</Link>

        </div>
    )
}

export default navigator;