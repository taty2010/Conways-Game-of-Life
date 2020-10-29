import React, {useState} from 'react';
import MiniGrid from './minigrid';
import { Link } from 'react-router-dom'

const Home = () => {

  return(
    <div className="content">
      <div className='background'>
      </div>
      <h1>Conways Game of Life</h1>
      <p>Created by mathematician John Horton Conway</p>
      <MiniGrid></MiniGrid>
      <div className="instructions">
        <h2>Instructions:</h2>
        <p>There are four rules that determine if a cell is live or dead</p>
        <ol>
          <li>Births: Each dead cell adjacent to exactly three live neighbors will become live in the next generation.
</li>
          <li>Death by isolation: Each live cell with one or fewer live neighbors will die in the next generation.</li>
          <li>Death by overcrowding: Each live cell with four or more live neighbors will die in the next generation.</li>
          <li>Survival: Each live cell with either two or three live neighbors will remain alive for the next generation.</li>
        </ol>
        <button><Link to='/Game'>Play Game</Link></button>
      </div>
    </div>
  )

}

export default Home