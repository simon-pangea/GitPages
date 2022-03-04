import React from 'react';
import logo from './logo.svg';
import './App.css';
import Geo from './Components/Geo';
import Notification from  './Components/Notification';
import Camera from './Components/Camera';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Geo/>
        <Notification/>
        <Camera/>
      </header>
    </div>
  );
}

export default App;
