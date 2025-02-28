//import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  //const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "hitesh",
  //   age: 21
  // }
  // let newArr = [1, 2, 3]

  return (
    <>
     <h1 className='bg-amber-200 text-blue-600 p-4 rounded-xl'>Tailwind test</h1>
     <br></br> 
     <Card username="chaiaurcode" btnText="click me" />
     <Card username="hitesh" btnText="visit me"/>    
    </>
  )
}

export default App
