//import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
    <Router forceRefresh={true}>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} myStyle={myStyle}  />


    
    <div className='container'>
    
        <Switch>
          <Route forceRefresh={true}exact path="/about">
          <About mode={mode} togglemode={togglemode} myStyle={myStyle} />
            
            </Route>
            <Route exact path="/">
            <TextForm exact mode={mode} togglemode={togglemode} myStyle={myStyle}  />
            </Route>
          
          
        </Switch>
    
    
    </div>
    </Router>
   
      

    
    </>
  );
}

export default App;
