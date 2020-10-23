import React, {useState, useEffect, useRef, useCallback} from 'react';
import '../../index.scss'
import produce from 'immer';
const Grid = () => {

  const[row, setRow] = useState(50)
  const[col, setcol] = useState(50)
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

    setTimeout(runSimulation, 100);
  }, []);

  return(
    <>
    <button onClick={() =>{
      setRunning(!running);
      if (!running){
      runningRef.current = true;
      runSimulation()
    }
    }}>
        {running ? 'Stop' : 'Start'}
    </button>
    <button onClick={() =>{
      setGrid(EmptyGrid())
    }}>
        Clear
    </button>
    <button onClick={() =>{
      setGrid(EmptyGrid())
    }}>
        Random
    </button>
    <div id='container'>
      {grid.map((rows, i) => 
        rows.map((col, k) => 
          <div
          onClick={() => {
            const newGrid = produce(grid, gridCopy => {
                gridCopy[i][k] = grid[i][k] ? 0 : 1;
            });
            setGrid(newGrid)
          }}
          key={`${i}-${k}`}
          className={ `boxes ${grid[i][k] ? 'alive': 'dead'}`}
         ></div>
         )
      )}
    </div>
    </>
  )
}

export default Grid;