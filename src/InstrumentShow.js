import './InstrumentShow.css';
import React from 'react';
import { useState } from 'react'
import guitar from './img/guitar.jpg' 
import piano from './img/piano.jpg'
import violin from './img/violin.jpg'
import drums from './img/drums.jpg'
import saxophone from './img/saxophone.jpg'
import heart from './img/heart.png'
import { click } from '@testing-library/user-event/dist/click'


// javascript object. Key = value.
const svgMap = {
  guitar, piano, violin, drums, saxophone 
};


function InstrumentShow({ type }){
  // to handle heart clicks.
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  }


  return <div>
    <div className="instrument-show" onClick={handleClick}>
      <img className="instrument" alt="animal" src={svgMap[type]} />
      <img className="heart" alt="heart" src={heart} style={{ width: 10 + 10 * clicks}} />
    </div>
  </div>
}

export default InstrumentShow;

