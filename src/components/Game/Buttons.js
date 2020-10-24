import React from 'react';

export const BttnSteps = ({ setRunning,running,runSimulation,setGen,gen}) => {
return(
  <button onClick={() =>{
    setRunning(!running);
    runSimulation()
    setGen(gen + 1)
  }}>Steps
  </button>
)
}

export const BttnStart = (props) => {
return(
  <button className={`start ${props.start ? 'show' : 'hide'}`} onClick={() =>{
    props.setRunning(!props.running);
    if (!props.running){
      props.runningRefCurr.current = true;
      props.runSimulation()
  }
  }}>
      {props.running ? 'Stop' : 'Start'}
  </button>
)
}

export const BttnClear = (props) => {
return(
  <button onClick={() =>{
    props.setGrid(props.EmptyGrid())
    props.setGen(0)
    props.setStart(false)
    if(props.running){
      props.setRunning(!props.running);
      // props.setGrid(props.EmptyGrid())
      props.setGen(0)
    }
  }}>
      Clear
  </button>
)
}

export const BttnRandom = (props) => {
  return(
    <button onClick={() =>{
      const rows = [];
      for(let r = 0; r < props.row; r++){
        rows.push(
          Array.from(Array(props.col), () => Math.random() > 0.5 ? 1 : 0));
      }
      props.setGrid(rows);
      props.setStart(true);
      if(props.running){
        props.setRunning(!props.running);
        // props.setGrid(props.EmptyGrid())
        props.setGen(0)
      }
}}>
    Random
</button>
  )
}

export const DarkMode = (props) => {
  const body = document.body
  body.classList.add('light')
  if(props.dark){
    body.classList.remove('light')
    body.classList.add('darkmode')
  }else{
    body.classList.add('light')
  }
  return(
    <button onClick={() => {
      props.setDark(!props.dark)
    }}>
      {props.dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export const Shape = (props) => {
  return(
    <button onClick={() => {
      props.setShape(!props.shape)
    }}>
      {props.shape ? 'Round' : 'Square'}
    </button>
  )
}

export const Time = (props) => {
  return(
    <div className="times">
    <button onClick={() => {
      props.setTime(1000)
    }}>
      1 sec
    </button>
    <button onClick={() => {
      props.setTime(5000)
    }}>
      5 sec
    </button>
    <button onClick={() => {
      props.setTime(10000)
    }}>
      10 sec
    </button>
    </div>
  )
}

