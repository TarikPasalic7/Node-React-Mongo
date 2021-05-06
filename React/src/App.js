import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import MainRouter from './MainRouter';


const App =() => {
  return (
    <BrowserRouter >
      <Header/>
     <MainRouter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
