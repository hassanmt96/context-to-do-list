import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppWithContext from "./AppWithContext"
import TodoContext from "./contexts/TodoContext"

ReactDOM.render(
  <React.StrictMode>

      <AppWithContext/>
   
  </React.StrictMode>,
  document.getElementById('root')
);
