import React from 'react';
import './App.css';
import Profile from "./profile";
import GH from "./av.png"
import PropTypes from 'prop-types';




  
const profile =[
  {
    name:"John Black",
    prof:"Developer",
    Bio:"He loves playing golf and go swimming"
  },
 
]


function App() {
  alert("hello Mr John");
  return (
    <div className="App">
    <profile><img src={GH}/>
      </profile>
      <Profile x={profile}/>
        </div>
  );
}



export default App;
