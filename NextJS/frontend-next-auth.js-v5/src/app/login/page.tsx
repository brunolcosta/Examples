import { signIn } from "../../../auth";

export default function LoginPage() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4"
        action={async (formData) => {
          "use server"
          
          await signIn("credentials", formData);
        }}
      >

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="w-full border p-2 rounded"
          required
        />
        <button
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}