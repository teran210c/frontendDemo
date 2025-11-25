const API_URL = "http://localhost:8080";

let accessToken = localStorage.getItem("accessToken");
let refreshToken = localStorage.getItem("refreshToken");

export async function register(username, password) {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });
    return res.json();
}

export async function login(username, password) {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    // ✔ Guardar tokens en variables y localStorage
    accessToken = data.accessToken;
    refreshToken = data.refreshToken;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return data;
}

async function refresh() {
    const res = await fetch(`${API_URL}/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) {
        console.log("❌ Refresh token inválido — usuario debe volver a login");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return null;
    }
    console.log("esa onda ok")
    const data = await res.json();

    // ✔ Actualizar token correctamente
    accessToken = data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    console.log(accessToken)

    return accessToken;
}

async function authorizedFetch(url, options = {}) {
    options.headers = {
        ...(options.headers || {}),
        Authorization: `Bearer ${accessToken}`,
    };

    let res = await fetch(url, options);

    // Si expira → hacer refresh
    if (res.status === 401 || res.status === 403) {
        const newToken = await refresh();

        if (!newToken) return res; // refresh falló, no repetir

        options.headers.Authorization = `Bearer ${newToken}`;
        res = await fetch(url, options);
    }

    return res;
}

export async function getMyProfile() {
    const res = await authorizedFetch(`${API_URL}/user/me`);

    if (!res.ok) {
        return { error: "No autorizado" };
    }

    return res.json();
}

export async function deleteAccount(token) {
    const res = await fetch(`${API_URL}/user/delete`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
}

