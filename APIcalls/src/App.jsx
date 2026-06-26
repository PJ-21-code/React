import React, {useState} from 'react'
import axios from 'axios'
const App = () => {

  const [data, setData] = useState([])
    const getData= async ()=> {
      /*const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data= await response.json() */

      const response= await axios.get('https://picsum.photos/v2/list')
      setData(response.data)  
      
  }
  return (
    <div>
      <button onClick={getData}> Get Data </button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello, {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App

/* lorem picsum is another website to get dummy api. It provides image data */