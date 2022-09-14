import React from 'react';
import FirstScreen from '../FirstScreen/FirstScreen';
import Navbar from '../Navbar/Navbar';
import SecondScreen from '../SecondScreen/SecondScreen';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <FirstScreen />
     <SecondScreen />
    </div>
  );
}

export default App;
