import React from 'react';
import './App.css';
import Welcome from './components/Welcome.js';
import Reverse from './components/Reverse/Reverse.js';
import TodoList from './components/TodoList/TodoList.js';

function App() {
  return (
    <div className="App">
     <Welcome nome="Evandro" sobrenome="Mendes" />
     <div className="reverse">
      <p className="app-text">Os textos abaixo são criados pelo componete Reverse:</p>
      <Reverse>
        Evandro
      </Reverse>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;
