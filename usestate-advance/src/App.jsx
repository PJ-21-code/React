import React, {useState} from 'react'

const App = () => {

  const [num, setnum] = useState({user:'Sarthak', age:20})
  const [arr, setarr] = useState([10,20,30])

  const btnClicked= ()=> {
    setnum(prev=>({...prev,user:'Aman',age:30})) /* This is a direct way to change state without creating newnum*/
  }
  const btnClicked2= ()=> {
    const newarr= [...arr] /* we can create a newarr which is referenced by arr and then changes take place in newarr and set into setarr*/
    newarr.push(99)
    setarr(newarr)
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <h1>{arr}</h1>
      <button onClick={btnClicked}>Click for user</button>
      <button onClick={btnClicked2}>Click for Array</button>
    </div>
  )
}

export default App

/* batch update also take place in usestate*/