import React, {useState, useEffect, useRef, useCallback} from 'react';
import '../../index.scss'
import produce from 'immer';
import {Link } from 'react-router-dom'
import {BttnStart, BttnClear, BttnSteps, BttnRandom, DarkMode, Shape, Time} from './buttons';

const Grid = () => {

  const[row, setRow] = useState(35)
  const[col, setcol] = useState(35)
  let[gen, setGen] = useState(0)
  const[start, setStart] = useState(false)
  const [dark, setDark] = useState(false)
  const [shape, setShape] = useState(false)
  const [time, setTime] = useState(100)
  const [operations, setOperations] = useState([
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
  ])

  const EmptyGrid = () => {
    const rows = [];
    for(let r = 0; r < row; r++){
      rows.push(Array.from(Array(col), () => 0));
    }
    return rows
  }

  const [grid, setGrid] = useState(() => {
    return EmptyGrid()
  })

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running

  const runSimulation = useCallback(() => {
      if(!runningRef.current) {
        return;
      }
      setGrid((g) => {
        return produce(g, gridCopy => {
        for (let i = 0; i < row; i++){
          for (let k = 0; k < col; k++){
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < row && newK >= 0 && newK < col){
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3){
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3){
              gridCopy[i][k] = 1;
            }
          }
        }
    });
  });

    setTimeout(runSimulation, time);
    setInterval(setGen(gen += 1), time)
  }, [time]);

  return(
    <>
    <div className="options">
      <Link to='/'>Home</Link>
    <h2>Generations: 
      {!running ? (
      <span className="count">{gen}</span>
      ) : (
        <span className="countAnimation">{gen}</span>
      )
      
      }
    </h2>
      <Time time={time} setTime={setTime}/>
      <BttnSteps 
      setRunning={setRunning}
      running={running}
      runSimulation={runSimulation}
      setGen={setGen}
      gen={gen}
      />
      <BttnStart
        start={start}
        setRunning={setRunning}
        running={running}
        runningRefCurr={runningRef}
        runSimulation={runSimulation}
      />
      <BttnRandom
      col={col}
      row={row}
      setGrid={setGrid}
      setStart={setStart}
      EmptyGrid={EmptyGrid}
      setGen={setGen}
      running={running}
      setRunning={setRunning}
      />
      <BttnClear
        setGrid={setGrid}
        setGen={setGen}
        setStart={setStart}
        EmptyGrid={EmptyGrid}
        running={running}
        setRunning={setRunning}
      />
      <DarkMode
        setDark={setDark}
        dark={dark}
      />
      <Shape
        shape={shape}
        setShape={setShape}
      />
    </div>

    <div id='container'>
      {grid.map((rows, i) => 
        rows.map((col, k) => 
        !dark ?(
          <div
          onClick={() => {
            const newGrid = produce(grid, gridCopy => {
                gridCopy[i][k] = grid[i][k] ? 0 : 1;
            });
            setGrid(newGrid)
            setStart(true)
          }}
          key={`${i}-${k}`}
          id='cells'
          className={ `boxes ${grid[i][k] ? 'alive': 'dead' }
          ${shape ? 'square' : 'round'}`}
         ></div>
         ) : (
          <div
          onClick={() => {
            const newGrid = produce(grid, gridCopy => {
                gridCopy[i][k] = grid[i][k] ? 0 : 1;
            });
            setGrid(newGrid)
            setStart(true)
          }}
          key={`${i}-${k}`}
          id='cells'
          className={ `boxes ${grid[i][k] ? 'alive': 'deadDark' }
          ${shape ? 'square' : 'round'}`}
         ></div>
         )
         )
      )}
    </div>
    </>
  )
}

export default Grid;