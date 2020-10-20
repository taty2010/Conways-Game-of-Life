import { createSlice } from "@reduxjs/toolkit";

export const initialState ={
      alive: false,
      cells: [{
        row:"",
        col: ""
      }],
      id: "",
    }

const Cells = createSlice({
  name: "cells",
  initialState,
  reducers: {
    NewCell: (state, action) => {
      console.log(action.payload)
      state.alive = false;
      state.cells.push([...state.cells, {row:action.payload.row, col:action.payload.col}]);
      // state.col = action.payload.col;
    },
    StartCells: (state, action) => {
      state.id = action.payload
      console.log(action.payload)
    }
  }
})

export const{
  StartCells,
  NewCell,
} = Cells.actions;

// export const SetNewCell = (r, c) => (dispatch) => {
//   //  console.log(action.payload)
//   dispatch(NewCell({cells:{row: r, col: c}}))
// }

export default Cells.reducer;