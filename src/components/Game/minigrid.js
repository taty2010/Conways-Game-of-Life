import React, {useState, useEffect, useRef, useCallback} from 'react';
import '../../index.scss'
import produce from 'immer';
const MiniGrid = () => {

  const[row, setRow] = useState(6)
  const[col, setcol] = useState(6)
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
            // grid[5][4] = 1
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

    setTimeout(runSimulation, 1000);
  }, []);

  return(
    <>
    <div id='minicontainer'>
      {grid.map((rows, i) => 
        rows.map((col, k) => 
          <div
          onClick={() => {
            const newGrid = produce(grid, gridCopy => {
                gridCopy[4][2] = grid[4][2] ? 0 : 1;
                gridCopy[3][2] = grid[3][2] ? 0 : 1;
                gridCopy[2][2] = grid[2][2] ? 0 : 1;
                gridCopy[3][3] = grid[3][3] ? 0 : 1;
                gridCopy[2][3] = grid[2][3] ? 0 : 1;
                gridCopy[1][3] = grid[1][3] ? 0 : 1;
                console.log(i, k)
            });
            setGrid(newGrid)
            setRunning(!running);
            if (!running){
            runningRef.current = true;
            runSimulation()
            }
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

export default MiniGrid;