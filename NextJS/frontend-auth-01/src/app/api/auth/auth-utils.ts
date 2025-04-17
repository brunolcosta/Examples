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

export function authorizeUser(credentials: Credentials) {
  if (
    credentials?.email === testUser.email &&
    credentials?.password === testUser.password
  ) {
    // Nunca retorne a senha!
    const { password, ...userWithoutPassword } = testUser;
    return userWithoutPassword;
  }
  return null;
}