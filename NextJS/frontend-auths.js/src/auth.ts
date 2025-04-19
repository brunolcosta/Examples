import NextAuth from "next-auth"
import { getUserFromDb } from "@/lib/db" // Assuming you have a function to get user from DB
import { ZodError } from "zod"
import { signInSchema } from "@/lib/zod" // Assuming you have a Zod schema for validation
import Credentials from "next-auth/providers/credentials"
import saltAndHashPassword from "@/lib/password-utils"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        credentials: {
            email: {},
            password: {}
        },
        authorize: async (credentials) => {
            try {
                let user = null
                
                const { email, password } = await signInSchema.parseAsync(credentials)

                const pwHash = saltAndHashPassword(password)

                user = await getUserFromDb(email, password)

                if (!user) {
                    throw new Error("Invalid credentials")
                }

                return user ? { ...user, id: String(user.id) } : null;
            } catch (error) {
                if (error instanceof ZodError) {
                   return null;
                }
                return null; // Ensure null is returned in all cases
            }
            
        },
    }),
    ],
    callbacks: {
        authorized: async ({ auth }) => {
            return !!auth
        }
    }
})