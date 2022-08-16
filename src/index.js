import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import './index.css';
import './style.css'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter> 
, document.getElementById('root'));