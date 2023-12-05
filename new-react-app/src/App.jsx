import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState(['item1', 
'item2', 'item3', 'item4'])
  const [loggedIn, setLoggedIn] = useState(false)
  
  const handleClick = () => {
    setLoggedIn(!loggedIn);
  }

  if (loggedIn){
    
    if (todos.length > 0) {
      return (
        <>
          <ul>
            <li>{todos}</li>
          </ul>
          <div className="btn" onClick={handleClick}>Click to log out</div>
        </>
      )
    } 
    return (
      <>
        <h1 id='heading'>There are no todos.</h1>
        <div className="btn" onClick={handleClick}>Click to log out</div>

      </> 
    )
  }
  return (
    <div>
      <h1 className="heading">You're not logged in.</h1>
      <div className="btn" onClick={handleClick}>Click to log in</div>
    </div>
  )

}

export default App
