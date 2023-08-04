//import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {

  const [myStyle,setmyStyle]=useState({
    color : 'black',
    backgroundColor : '#dee2e6'

  });

 
  const [mode,semode]=useState('light');

  const togglemode=()=>{
    if(mode==='light'){
      semode('dark');
      document.body.style.backgroundColor='#343a40'
      setmyStyle({
        color : 'white',
        backgroundColor : '#343a40'});
    }else{
      semode('light');
      document.body.style.backgroundColor='#dee2e6'
      setmyStyle({
        color : 'black',
        backgroundColor : '#dee2e6'});
     }
      
    
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} myStyle={myStyle}  />


    
   <div className='container'>
    <TextForm mode={mode} togglemode={togglemode} myStyle={myStyle}  />
    </div>
     {/*
    <div>
      <About />
  </div>*/}
    
    </>
  );
}

export default App;
