import React from 'react'
import { useState } from 'react'
export default function App8() {
    const[value,setValue]=useState(0)
    const[result,setResult]=useState(0)
    const calc=()=>{setResult(value*value)}
  return (
    <div>
        <input type='number' onChange={(e)=>setValue(e.target.value)}></input>
        <button onClick={calc}>Submit</button>
        <hr></hr>
        you have entered {value} and the result is {result}
    </div>
  )
}
