import React from 'react';
import Home from './components/intro/home'
import './index.scss';
import Game from './components/game/grid'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home/>
     </Route>
     <Route exact path="/Game">
       <div className='gameContent'>
        <Game/>
       </div> 
     </Route>
    </div>
  );
}

export default App;
