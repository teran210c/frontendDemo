import { useState } from "react";
import { getMyProfile } from "../src/api";

export default function() {
    const [profile, setProfile] = useState(null);

  async function loadProfile() {
    const data = await getMyProfile();
    setProfile(data);
  }

  return (
    <div>
      <h1>Mi Perfil</h1>

      <button onClick={loadProfile}>
        Cargar datos
      </button>

      {profile && (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      )}
    </div>
  );
}