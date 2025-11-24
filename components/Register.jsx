import { useState } from "react"
import { register } from "../src/api"

export default function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleRegister() {
       const data = await register(username, password)
       console.log(data)
    }

    return (
        <div>
            <h2>Register</h2>
            <input 
                placeholder="User" 
                onChange={e => setUsername(e.target.value)} 
                type="text" 
                required
            />
            <input 
                placeholder="Password" 
                type="password" 
                pattern="^(?=.*[!@#$%^&*]).{8,}$"
                onChange={e => setPassword(e.target.value)}
                required
            />
            <button onClick={handleRegister}>Register</button>
        </div>

    )
}