import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className= 'parent'>
      <Card user="Aman" age='18' img="https://images.unsplash.com/photo-1781633237528-d19707220264?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" detail="An Engineer" />
      <Card user="Ajay" age='18' img="https://images.unsplash.com/photo-1781591272000-f7f4f0c386b0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" detail="A Philosopher" />
    </div>
  )
}

export default App