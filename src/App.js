import React from 'react';
import './App.css';
import Button from     './components/button/button';
import { Navbar2 } from'./components/navbar/navbar';
import { Slider } from './components/slider/slider';

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Slider />
      <header className="App-header">
        <Button label="BUY NOW"></Button>
      </header>
    </div>
  );
}

export default App