import React from 'react';
import './App.css';
import Welcome from './components/Welcome.js';
import Reverse from './components/reverse.js';

function App() {
  return (
    <div className="App">
     <Welcome nome="Evandro" sobrenome="Mendes" />
    {/* <Reverse texto="ola"/>
      <Reverse texto="meu texto"/> */}
      <Reverse>
        Evandro
      </Reverse>
    </div>
  );
}

export default App;
