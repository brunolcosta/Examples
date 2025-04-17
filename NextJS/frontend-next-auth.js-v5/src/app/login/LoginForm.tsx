"use client";
import { useState } from "react";
import loginAction from "./loginAction";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        try {

            e.preventDefault();
            setError(null);
            const formData = new FormData(e.currentTarget);
            await loginAction(formData);

        } catch {
            setError('Credenciais inválidas');
        }

    }

    return (
        <form
            className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4"
            onSubmit={handleSubmit}
        >
            {error && <div className="text-red-500">{error}</div>}
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
    );
}