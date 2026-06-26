import React from 'react'

const App = () => {

  const user=localStorage.getItem('user')
  console.log(user)

  const users= {
    username: 'Pranjal',
    age: 18,
    city: 'Khatauli'
  }

  console.log(users);
  localStorage.setItem('user', JSON.stringify(users))
  return (
    <div>App</div>
  )
}

export default App

/** Four function
 * 1). setItem()
 * 2). getItem()
 * 3). clear()
 * 4). removeItem()
 * data to be stored as key value pair
 */