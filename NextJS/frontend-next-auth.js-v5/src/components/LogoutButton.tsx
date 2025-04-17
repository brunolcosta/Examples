import { signOut } from "../../auth";

export default function LogoutButton() {
  return (
    <button
      onClick={async () => {
        "use server"
        await signOut({ redirectTo: "/login" })
      }}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Sair
    </button>
  );
}