import './App.css'
import Register from '../components/register'
import Login from '../components/login'
import { useState } from 'react'
import DeleteAccount from '../components/DeleteAccount'


function App() {
  const [token, setToken] = useState("")

  return (
    <>
      <Register />
      <Login setToken={setToken} />
      {token && (
        <>
          <h3>Authenticated Actions</h3>
          <DeleteAccount token={token} />
        </>
      )}
    </>
  )
}

export default App
