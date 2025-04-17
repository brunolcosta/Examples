import { authorizeUser } from "@/app/api/auth/auth-utils";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@exemplo.com" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (credentials) {
          return await authorizeUser(credentials as { email: string; password: string });
        } 
        return null;        
      },
    }),
  ],
  session: {
    strategy: "jwt" as const
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redireciona sempre para a página desejada após login
      return "/"; // ou qualquer rota desejada
    },
  },
});