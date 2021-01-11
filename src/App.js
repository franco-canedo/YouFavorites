import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import FormComp from './components/Form';

import { toggle } from './actions';



function App() {

  return (
    <div>
      <div className="app-title-container">
        <div className="app-title-div">
        <h1>YouTube Favorites</h1>
        </div>
        
      </div>
      <div className="login-form-container">
        <div className="login-form-div">
        <FormComp/>
        </div>

      </div>
    </div>
  )
}

export default App;
