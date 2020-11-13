import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithContext from "./AppWithContext"
import TodoContext from "./contexts/TodoContext"

ReactDOM.render(
  <React.StrictMode>
    <TodoContext.Provider value={AppWithContext.state}>
      <AppWithContext />
    </TodoContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
