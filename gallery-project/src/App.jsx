import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from './components/Card.jsx'
const App = () => {

  const [userData, setuserData] = useState([])

  const [index, setindex] = useState(1)
  const getData= async() => {

    const response= await axios.get('https://picsum.photos/v2/list?page=${index}&limit=30')

    setuserData(response.data);
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData= <h3 className='text-gray-400 text-4xl absolute top-1/2 left-1/2'>Loading  ...</h3>
  if(userData.length>0)
  {
    printUserData= userData.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }
  return (
    <div className='bg-black h-full text-white'>
      <h1 className='flex text-4xl'>{index}</h1>
        <div className='flex flex-wrap gap-4 p-2'>
          {printUserData}
        </div>
        <div className='flex justify-center gap-5'>
          <button 
          style= {{opacity: index==1 ? 0.5:1}}
          onClick={() =>{
            if(index>1){
              setindex(index-1)
              setuserData([])
            }
          }} 
          className='bg-amber-700 rounded px-7 py-3'>
            Prev</button>
            <h3>Page {index}</h3>
          <button 
          onClick={() =>{
            setuserData([])
            setindex(index+1)
          }}
          className='bg-amber-700 rounded px-7 py-3'>
            Next</button>
        </div>
    </div>
  )
} 

export default App