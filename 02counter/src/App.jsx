import { useState } from 'react'

import './App.css'



function App() {
  let [counter,setCounter]=useState(15)

  const addValue = ()=>{
    // console.log('clicked',counter);
    if (counter>=20) return
    counter += 1
    setCounter(counter)
  }
  const decVal =()=>{
    if (counter<=0) return
    setCounter(counter-=1)
  }
  
  return (
    <>
      <h2>Test Project On Hooks Video</h2>
      <h2>counter value : {counter}</h2>
      <button 
      onClick={addValue}
      >add value</button>
      <br />
      <button
      onClick={decVal}
      >decrease value</button>
        
    </>
  )
}

export default App
