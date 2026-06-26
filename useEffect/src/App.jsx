import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  function aChanging(){
    console.log('Value of A is changing');
  }
  function bChanging(){
    console.log('Value of B is changing');
  }
  useEffect(function(){
    aChanging() /* I can pass a function and it will aso run when a is changing and same goes for b */
  },[]) /* If i pass a dependency array in useEffect then it will run only one time. If i pass [a] then it will run only when {a} changes and the same goes for {b} as well when [b] is passed into it */
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={() =>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App