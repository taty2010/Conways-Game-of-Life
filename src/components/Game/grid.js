import React, {useState} from 'react';
import '../../index.scss'
import {Stage, Layer,Rect,Text,Circle,Line} from 'react-konva';

const Grid = () => {
  const[tBox, setTBox] = useState(false)
  const[row, setRow] = useState(20)
  const[col, setcol] = useState(20)
  const rows = [];
  const columns = [];
  const boxesr = []

  for(let r = 0; r < row; r++){
    rows.push(r)
  }
  console.log(rows)
  for(let c = 0; c < col; c++){
    columns.push(c)
  }

  const suqareClick = (e) => {
    e.preventDefault();
    console.log('this square was clicked')
  }

 for(var i = 0; i < col + row; i++){
   for(var c = 0; c < row; c++){
     const boxId =  i + "_" + c;
     boxesr.push(
       <div
        className="boxes"
        key ={boxId}
        value={boxId}
        row={i}
        col={c}
        onClick = {suqareClick}
       ></div>
     )
   }
 }
  return(
    <div id='container'>
      {rows.map((r,i) => (
        columns.map((c,i) => (
          <div
          className="boxes"
          key ={i}
          onClick = {() => console.log('row',r, 'colum', c)}
         ></div>
        ))
      ))}
      {/* {boxesr} */}
    </div>
  )
}

export default Grid;