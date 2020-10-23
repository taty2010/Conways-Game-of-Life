import React, {useState} from 'react';
import Grid from '../Game/grid';
const Home = () => {

  const[interval, setInterval] = useState(100)
  const[running, setRunning] = useState(false)
console.log(running)
  return(
    <div>
      <h1>Conways Game of Life</h1>
      <p>This will break down what the game is about blah blah blah</p>
      <button onClick= {() => setRunning(!running)}>start</button>
      <div className="grid-wrapper">
        <Grid/>
      </div>
    </div>
  )

}

export default Home