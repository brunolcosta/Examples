

export async function getUserFromDb(email: string, password: string) {
    // Simulate a database call
    const users = [
        { id: 1, email: "user@newbeef.com" }
    ];
    

    const user = users.find(user => user.email === email);
    if (!user) {
        throw new Error("User not found");
    }
    

    if (password !== "12345678") {
        throw new Error("Invalid password");
    }
    
    return user;
}