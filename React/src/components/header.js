import logo from '../assets/images/logo.png';
import Navigator from './navigator'

const header = () =>{

    return(
        <header>
            <div className='left'>  <img src={logo} alt='Logo' height='60' width='70'/></div>
          <div className='left'> <h2>Books</h2></div>
          <div className='rigt'><Navigator/> </div>
           
       
        </header>
    )
}
export default header;