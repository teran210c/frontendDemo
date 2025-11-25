import { logout } from "../src/api";

export default function Logout({ setToken }) {
  async function handleLogout() {
    await logout();          // llama al backend y borra tokens en frontend
    setToken("");            // limpia el estado en App.jsx
  }

  return (
    <div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
