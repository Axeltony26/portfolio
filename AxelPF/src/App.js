import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Projet from './Component/Projet';
import Home from './Component/Home';


import {Routes,Route, BrowserRouter as Router} from 'react-router-dom';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Testimonial from './Component/Testimonial';
import './style.app.css';

function App() {
  
  return (
    
    <div className="back">
    <Router>
    <div className="App">
    
      <Header /> 
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/projets' element = {<Projet />} />
        <Route path = '/contact' element = {<Contact />} />
        <Route path = '/testimonial' element = {<Testimonial />} />
      </Routes>
      
     
    </div>

    <div>
      <Footer className='Footer'/>
    </div>
    </Router>
    </div>
  );
}

export default App;
