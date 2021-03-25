import React from 'react';
import './App.scss';
import { Navbar2 } from'./components/navbar/navbar';
import { Slider } from './components/slider/slider';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      {/*  <Navbar2 />*/}
      <Slider  />

    </div>
  );
}

export default App;
