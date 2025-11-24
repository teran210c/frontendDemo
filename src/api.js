const API_URL = "http://localhost:8080"

export async function register(username, password) {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username, password })
    })
    return res.json()
}

export async function login(username, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  return res.json();
}

export async function deleteAccount(token) {
  const res = await fetch(`${API_URL}/user/delete`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}