const API_URL = "http://localhost:8080"

export async function register(username, password) {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username, password })
    })
    return res.json()
}