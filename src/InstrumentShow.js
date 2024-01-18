import guitar from './img/guitar.jpg' 
import piano from './img/piano.jpg'
import violin from './img/violin.jpg'
import drums from './img/drums.jpg'
import saxophone from './img/saxophone.jpg'


// javascript object. Key = value.
const svgMap = {
  guitar, piano, violin, drums, saxophone 
};


function InstrumentShow({ type }){
  return <div>
    <img alt="animal" src={svgMap[type]} />
  </div>
}

export default InstrumentShow;

