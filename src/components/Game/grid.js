import React, {useState, useEffect} from 'react';
import '../../index.scss'
import Boxes from "./box";
import {Stage, Layer,Rect,Text,Circle,Line} from 'react-konva';

const Grid = () => {
  const[tBox, setTBox] = useState(false)
  const [cell, setCell] = useState([])
  const[row, setRow] = useState(20)
  const[col, setcol] = useState(20)
  const rows = [];
  const columns = [];
  const boxesr = []

  for(let r = 0; r < row; r++){
    rows.push(r)
  }
  // console.log(rows)
  for(let c = 0; c < col; c++){
    columns.push(c)
  }

  const squareClick = (r, c) => {
    console.log('this square was clicked')
    setTBox(!tBox)
  }

  // const handleChange = (e) => {
  //   setCell({...cell, [e.target.name]: e.target.value})
  // }

console.log(tBox)
  return(
    <div id='container'>
      {rows.map((r,i) => (
        columns.map((c,i) => (
          <Boxes
          tBox={tBox}
          setTBox={setTBox} 
          columns={c}
          rows={r}
          index={i}
          squareClick={squareClick}
          // className={tBox ? 'alive' : 'dead'}
          key ={i}
          // value={r + c}
          // onClick = {(e) => {console.log('row',r, 'colum', c);squareClick(e.target.value)}}
         ></Boxes>
        ))
      ))}
      {/* {boxesr} */}
    </div>
  )
}

export default Grid;