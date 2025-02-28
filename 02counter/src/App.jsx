import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter,setCounter]= useState(15);

  const addValue=()=>{
    //console.log("clicked",counter);
    if(counter <=19){
    counter=counter+1;
    setCounter(counter);}

  }
  const decreaseValue = ()=>{
    console.log("clicked",counter);
    counter=counter-1;
    setCounter(counter);
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>add value</button>
    <button onClick={decreaseValue}>decrease value</button>
    </>
  )
}

export default App
