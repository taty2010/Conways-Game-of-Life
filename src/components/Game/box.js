import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NewCell, StartCells} from '../../state/slices.js/cells'
const Boxes = (props) => {
  const [initialState , setInitialState] = useState("")
  // const dispatch = useDispatch();
  // const { alive, id } = useSelector(
  //   (state) => state.cells
  // );

  useEffect(() => {
    setInitialState([...initialState, {col:props.rows, row:props.columns, active: false}])
  }, [props.columns, props.rows])

  const [on, setOn] = useState(false)
  const activate = (e) => {
    const id = `${initialState[0].row}${initialState[0].col}`
    console.log(id, e)
    if(e == id){
      console.log('hello')
      setOn(!on)
    }
  }

  return(
    <div 
    className={on ? 'alive': 'dead'}
    id = {`${props.columns}${props.rows}`}
    onClick = {(e) => {activate(e.target.id);}}
    >

    </div>
  )
}

export default Boxes