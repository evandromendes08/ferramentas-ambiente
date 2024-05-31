import React from 'react';
import './App.css';
import Welcome from './components/welcome.js';
import Reverse from './components/reverse.js';

function App() {
  return (
    <div className="App">
      <h1>Olá!</h1>
      <Welcome nome="Evandro" sobrenome="Mendes" />
      <Welcome nome="Maria" />
      {/* <Reverse texto="ola"/>
      <Reverse texto="meu texto"/> */}
      <Reverse>
        Evandro
      </Reverse>
    </div>
  );
}

export default App;
