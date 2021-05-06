import logo from '../assets/images/logo.png';

const styles = {

    image:{
        width:'150px'
    },
    title: {
        fontSize: '2em'
    }
}
const Home = () =>{

    return(
        <div className='container'>
            <img src={logo} alt='Logo' style={styles.image} height='100' width='100'/>
            <div style={styles.title}>Welcome to my first app</div>

        </div>
    )
}

export default Home;