import React from 'react'

const App = () => {
  return (
    <div className='h-screen  bg-black'>
      <form className='flex flex-col p-10 gap-5'>
        <input type="text" className='px-5 py-2 border-2 rounded text-white' placeholder="Enter notes Heading" />
        <input type="text" className='px-5 h-25 py-2 border-2 rounded text-white' placeholder= "Enter Details" />
        <button className='text-black bg-white px-5 py-2 rounded'>Add Notes</button>
      </form>
    </div>
  )
}

export default App