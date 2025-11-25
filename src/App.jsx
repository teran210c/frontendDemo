import './App.css'
import Register from '../components/register'
import Login from '../components/login'
import { useState } from 'react'
import DeleteAccount from '../components/DeleteAccount'
import ProfilePage from '../components/ProfilePage'
import Logout from '../components/Logout'

function App() {
  const [token, setToken] = useState("")

  return (
    <>
      <Register />
      <Login setToken={setToken} />
      <ProfilePage />
      {token && (
        <>
          <h3>Authenticated Actions</h3>
          <DeleteAccount token={token} />
          <Logout setToken={setToken} />
        </>
      )}
    </>
  )
}

export default App
