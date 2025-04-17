type Credentials = {
  email?: string;
  password?: string;
};

const testUser = {
  id: "1",
  name: "Admin",
  email: "user@newbeef.com",
  password: "12345678",
};

export async function authorizeUser(credentials: Credentials) {

  const validUser = (
    credentials?.email === testUser.email &&
    credentials?.password === testUser.password
  );
  
  if (!validUser) {
    throw new Error("Invalid credentials.")
  }
  // Nunca retorne a senha!
  const { password, ...userWithoutPassword } = testUser;
  return userWithoutPassword;
}