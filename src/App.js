import './App.css';
import React from 'react';
import { useState } from "react";
import InstrumentShow from "./InstrumentShow";
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';


function getRandomInstrument() {
  const instruments = ['guitar', 'piano', 'violin', 'drums', 'saxophone']

  return instruments[Math.floor(Math.random() * instruments.length)];
}
console.log(getRandomInstrument());


function App() {
  const [instruments, setInstruments] = useState([]);
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  const handleClick = () => {
    // create brand new array, take existing elements and put it in a new array.
    setInstruments([...instruments, getRandomInstrument()])
  };

  // rendering a list of instruments using Map function. Record keeping using Type and Key.
  const renderedInstruments = instruments.map((instrument, index) => {
    return <InstrumentShow type={instrument} key={index} />

  });



  return <div className="app">

    <h1>Random Instrument Generator:</h1>
      <h2>Remove decision fatigue when it comes to picking a musical instrument.</h2>
      <SearchBar onSubmit={handleSubmit} />
      <button onClick={handleClick}>Randomize</button>
      <ImageList images={images} />
      <div className="instrument-list">{renderedInstruments}</div>
  </div>
  }

export default App;
