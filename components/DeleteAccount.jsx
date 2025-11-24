import { deleteAccount } from "../src/api";

export default function DeleteAccount({ token }) {
  async function handleDelete() {
    const data = await deleteAccount(token);
    console.log(data);
  }

  return (
    <div>
      <button onClick={handleDelete}>
        Delete My Account
      </button>
    </div>
  );
}
