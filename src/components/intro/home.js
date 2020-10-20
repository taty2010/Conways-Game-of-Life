import React from 'react';
import Grid from '../Game/grid';
const Home = () => {

  return(
    <div>
      <h1>Conways Game of Life</h1>
      <p>This will break down what the game is about blah blah blah</p>
      <button>start</button>
      <div className="grid-wrapper">
        <Grid/>
      </div>
    </div>
  )

}

export default Home