import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authorizeUser } from "../auth-utils";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@exemplo.com" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (credentials) {
          return authorizeUser(credentials);
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };