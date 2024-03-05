
import './App.css';
import View from './component/View'
import Button from './component/Button'
import { useState } from 'react';
 
 

function App() {
 
  const [color, setColor] = useState('white');
  const colorChange = (value)=>{
    setColor(value)
  }
     
  return (
    <div className="App">
        <View bg = {color} />
        <>
        <Button colorChange={colorChange} />
        </>
    </div>
  );
}

export default App;
