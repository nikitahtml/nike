import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

import CRUD from './CRUD.js';


const  root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
 
  
  <React.StrictMode>
     <CRUD /> 
  </React.StrictMode>  
  );  
  // root.render(<CRUD />)