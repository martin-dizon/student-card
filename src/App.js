import Card from './components/Card';
import './components/Card/card.css';
import StudentPicture from './assets/DSC_0133.jpg';
import StudentPicture2 from './assets/red.jpg';
import { useState } from 'react';

function App() {
  const [color1, setColor1] = useState("blue")
  const [color2, setColor2] = useState("red")
  const bgChange = () => {
      setColor1(color1 === "blue" ? "red" : "blue");
  }
  const bgChange2 = () => {
      setColor2(color2 === "red" ? "blue": "red");
  }
  return (
      <div className='card-container'> 
          <div onClick ={bgChange}>
            <Card studentPicture={StudentPicture} studentId="180335" name="Martin Dizon" birthday="11/02/2000" quotableQuotes="Hello World" bgColor={color1}/>
          </div>
          <div onClick ={bgChange2}>
            <Card studentPicture={StudentPicture2} studentId="180336" name="Red Cruz" birthday="06/05/1999" quotableQuotes="I'm ready!" bgColor={color2}/>
          </div>
      </div>
  );
}

export default App;
