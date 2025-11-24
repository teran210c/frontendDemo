import { login } from "../src/api";
import { useState } from "react";

export default function Login({ setToken }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin() {
        const data = await login(username, password);
        if (data.token) {
            setToken(data.token);
        }
        console.log(data);
    }

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="User" onChange={e => setUsername(e.target.value)} />
            <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}