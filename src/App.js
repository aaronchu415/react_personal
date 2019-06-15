import React from 'react';
import './App.css';
import Header from './components/Header';
import SectionOne from './components/Section1';
import SectionTwo from './components/Section2';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </div>
  );
}

export default App;
