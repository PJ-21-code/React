import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(2)
  function incnum(){
    setnum(num+1)
  }
  function decnum(){
    setnum(num-1)
  }
  function jumpby5(){
    setnum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incnum}>Increase</button>
      <button onClick={decnum}>Decrease</button>
      <button onClick={jumpby5}>Jump by 5</button>
    </div>
  )
}

export default App